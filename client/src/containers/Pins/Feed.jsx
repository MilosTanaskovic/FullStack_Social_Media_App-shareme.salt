import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import { client } from '../../client';
import { Spinner } from '../../components';
import { feedQuery, searchQuery } from '../../utils/data';
import { MasonryLayout } from '../Layouts';



const Feed = () => {
    const [pins, setPins] = useState([]);
    const [loading, setLoading] = useState(true);
    const {categoryId} = useParams();

    useEffect(() => {
        if(categoryId) {
            {/* Logic for search by categoryId */}
            setLoading(true);
            const query = searchQuery(categoryId);
            client.fetch(query)
                .then((data) => {
                    setPins(data);
                    setLoading(false);
                });
        } else {
            {/* Logic for feeds */}
            setLoading(true);
            client.fetch(feedQuery)
                .then((data) => {
                    setPins(data);
                    setLoading(false);
                })
            
        }
    }, [categoryId])

    if(loading) return <Spinner message={`We are adding new ideas to your feed!`} />
    
    console.log('categoryId: ',categoryId)
    return (
        <div>
            {pins && <MasonryLayout pins={pins} />}
        </div>
    )
}

export default Feed
