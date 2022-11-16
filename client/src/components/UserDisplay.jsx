import React from 'react'
import { Link } from 'react-router-dom'

const UserDisplay = ({children, href, handleCloseSidebar, classes}) => {
    return (
        <Link
            to={href}
            className={classes}
            onClick={handleCloseSidebar}
        >
           {children}
        </Link>
    )
}

export default UserDisplay
