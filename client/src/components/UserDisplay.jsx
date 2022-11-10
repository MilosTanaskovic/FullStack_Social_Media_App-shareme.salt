import React from 'react'
import { Link } from 'react-router-dom'

const UserDisplay = ({children, user, handleCloseSidebar, classes}) => {
    return (
        <Link
            to={`/user-profile/${user._id}`}
            className={classes}
            onClick={handleCloseSidebar}
        >
           {children}
        </Link>
    )
}

export default UserDisplay
