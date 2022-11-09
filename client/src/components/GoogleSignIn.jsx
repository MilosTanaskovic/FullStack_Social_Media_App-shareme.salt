import React from 'react';
//import GoogleLogin from 'react-google-login';
import { GoogleLogin } from '@react-oauth/google';
import {useNavigate} from 'react-router-dom';
import jwt_decode from "jwt-decode";
import {FcGoogle} from 'react-icons/fc';
import { client } from '../client';

const GoogleSignIn = () => {
    const navigate = useNavigate();

    const handleResponseGoogle = (credentialResponse) => {
        console.log(credentialResponse.credential)
        const decodedObj = jwt_decode(credentialResponse.credential);
        console.log(decodedObj)

        localStorage.setItem('user', JSON.stringify(decodedObj));

        const {name, jti, picture } = decodedObj;

        const doc = {
            _id: jti,
            _type: 'user',
            userName: name,
            image: picture
        }

        client.createIfNotExists(doc)
            .then(() => {
                navigate('/', {replace: true})
            });

    }
    return (
        <div className="shadow-2xl">
           {/* <GoogleLogin 
                
                render={(renderProps) => (
                    <button 
                        type="button" 
                        className="bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                    >
                        <FcGoogle 
                            className="mr-4"
                        />
                        Sign in with Google
                    </button>
                )}
                onSuccess={handleResponseGoogle}
                onFailure={handleResponseGoogle}
                cookiePolicy="single_host_origin"
                />*/}
                <GoogleLogin
                    onSuccess={handleResponseGoogle}
                    onError={handleResponseGoogle}
                />
        </div>
    )
}

export default GoogleSignIn
