import React from 'react';
import {Link} from 'react-router-dom';

const CreatePinIcon = ({children, href, classes}) => {
    return (
        <Link
            to={href}
            className={classes}
        >
            {children}
        </Link>
    )
}

export default CreatePinIcon
