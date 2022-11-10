import React, {useState, useEffect} from 'react';
import {NavLink, Link} from 'react-router-dom';
import {RiHomeFill} from 'react-icons/ri';
import {IoIosArrowForward} from 'react-icons/io'
import logo from '../assets/logo.png';
import { Category, Logo, UserDisplay } from '../components';
import { categoryQuery } from '../utils/data';
import { client } from '../client';


const isNotActiveStyle = 'flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize';
const isActiveStyle = 'flex items-center px-5 gap-3 font-extrabold border-r-2 border-black  transition-all duration-200 ease-in-out capitalize';

const SideBar = ({closeToggle, user}) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const query = categoryQuery();

        client.fetch(query)
            .then((data) => {
                setCategories(data);
            })
    }, []);

    const newCategories = categories.filter((items) => items.categoryName !== 'Others');

    const handleCloseSidebar = () => {
        if (closeToggle) closeToggle(false);
    }

    console.log('categories: ', categories);
    console.log('New Categories: ', newCategories);
    return (
        <div className="flex flex-col justify-between bg-white h-full overflow-y-scroll min-w-210 hide-scrollbar">
            <div className="flex flex-col">
                <Link
                    to="/"
                    className="flex px-5 gap-2 my-6 pt-1 w-190 items-center"
                    onClick={handleCloseSidebar}
                >
                    <Logo 
                        srcLogo={logo}
                        altLogo={'logo'}
                        classes={'w-full'}
                    />
                </Link>
                <div className="flex flex-col gap-5">
                    <NavLink 
                        to="/"
                        className={({isActive}) => (isActive ? isActiveStyle : isNotActiveStyle)}
                    >
                        <RiHomeFill />
                        Home
                    </NavLink>
                    <h3 className="mt-2 px-5 text-base 2xl:text-xl">Discover categories</h3>
                    
                    {newCategories.map((category) => (
                        <Category 
                            key={category.categoryName}
                            category={category}
                            isActiveStyle={isActiveStyle}
                            isNotActiveStyle={isNotActiveStyle}
                            handleCloseSidebar={handleCloseSidebar}
                        />
                    ))}
                </div>
            </div>

            {user && (
                <UserDisplay
                    user={user}
                    handleCloseSidebar={handleCloseSidebar}
                    classes={'flex my-5 mb-3 gap-2 p-2 items-center bg-white rounded-lg shadow-lg mx-3'}
                >
                    <img 
                        src={user.image}
                        className="w-10 h-10 rounded-full"
                        alt={'user-profile'}
                    />
                    <p>{user.userName}</p>
                    <IoIosArrowForward />
                </UserDisplay>
            )}
        </div>
    )
}

export default SideBar
