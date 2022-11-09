import React from 'react'

const VideoBG = ({srcVideo, controls, classes}) => {
    return (
        <video 
            src={srcVideo}
            type="video/mp4"
            loop
            controls={controls}
            muted
            autoPlay
            className={classes}
        />
    )
}

export default VideoBG
