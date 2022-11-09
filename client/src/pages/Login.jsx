import React from 'react';
import shareVideo from '../assets/share.mp4';
import logo from '../assets/logowhite.png';
import { Logo, VideoBG } from '../components';
import { Register } from '../containers';

const Login = () => {
    return (
        <div 
            className="
                flex 
                justify-start 
                items-center 
                flex-col 
                h-screen
            "
        >
            <div className="relative w-full h-full">
                <VideoBG 
                    srcVideo={shareVideo}
                    controls={false}
                    classes="w-full h-full object-cover"
                />
                <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
                    <Logo 
                        srcLogo={logo}
                        widthLogo={'130px'}
                        altLogo={"Logo"}
                    />

                    <Register />
                </div>
            </div>
        </div>
    )
}

export default Login
