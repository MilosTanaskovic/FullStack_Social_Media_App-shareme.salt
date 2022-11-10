import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {IoMdAdd, IoMdSearch} from 'react-icons/io';
import { CreatePinIcon, Search, UserDisplay } from '../../components';
import { CreatePin } from '.';

const Header = ({searchTerm, setSearchTerm, user}) => {
    return (
        <div className="flex gap-2 md:gap-5 w-full mt-5 pb-7">     
            <Search 
                searchTerm={searchTerm} 
                setSearchTerm={setSearchTerm}
            />
            <div className="flex gap-3">
                <UserDisplay
                    user={user}
                    classes={'hidden md:block'}
                >
                        <img 
                            src={user.image}
                            alt="user-pic"
                            className="w-14 h-12 rounded-lg"
                        />
                </UserDisplay>
                <CreatePinIcon
                    href={"/create-pin"}
                    classes={'bg-black text-white rounded-lg w-12 h-12 md:w-14 md:h-12 flex justify-center items-center'}
                >
                    <IoMdAdd />
                </CreatePinIcon>
            </div>
        </div>
    )
}

export default Header
