import React from 'react'

const Logo = ({srcLogo, widthLogo, altLogo}) => {
    return (      
        <div className="p-5">
            <img src={srcLogo} width={widthLogo} alt={altLogo} />
        </div>
    )
}

export default Logo
