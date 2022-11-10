import React from 'react'

const Logo = ({srcLogo, widthLogo, altLogo, classes}) => {
    return (        
        <img 
            src={srcLogo} 
            width={widthLogo} 
            alt={altLogo} 
            className={classes} 
        />
    )
}

export default Logo
