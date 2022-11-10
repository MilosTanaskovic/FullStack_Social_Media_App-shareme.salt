import React from 'react';
import {NavLink} from 'react-router-dom';

const Category = ({category, isActiveStyle, isNotActiveStyle, handleCloseSidebar}) => {
    const {categoryName, categoryImg} = category;
    return (
        <NavLink
            to={`/category/${categoryName}`}
            className={({isActive}) => (isActive ? isActiveStyle : isNotActiveStyle)}
            onClick={handleCloseSidebar}
            key={categoryName}
        >
            <img 
                src={categoryImg}
                className="w-8 h-8 rounded-full shadow-sm"
            />
            {categoryName}
        </NavLink>
    )
}

export default Category
