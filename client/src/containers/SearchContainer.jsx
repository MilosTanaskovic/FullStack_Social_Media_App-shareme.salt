import React, {useState, useEffect} from 'react';
import { client } from '../client';
import { Spinner } from '../components';
import { feedQuery, searchQuery } from '../utils/data';
import { MasonryLayout } from './Layouts';

const SearchContainer = ({searchTerm}) => {
    const [pins, setPins] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if(searchTerm !== ''){
            setLoading(true);
            const querySearch = searchQuery(searchTerm);

            client.fetch(querySearch)
                .then((data) => {
                    setPins(data)
                    setLoading(false);
                })
        } else {
           
            client.fetch(feedQuery)
                .then((data) => {
                    setPins(data);
                    setLoading(false);
                })
        }
    }, [searchTerm]);

    console.log('search Pins', pins)
    return (
        <div>
            {loading && <Spinner message="Searching pins" />}
            {pins?.length !== 0 && <MasonryLayout pins={pins} />}
            {pins?.length === 0 && searchTerm !== '' && !loading && (
                <div className="mt-10 text-center text-xl ">No Pins Found!</div>
            )}
        </div>
    )
}

export default SearchContainer
