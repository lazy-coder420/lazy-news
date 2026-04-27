'use client'

import { authClient } from '@/lib/auth-client';
import React from 'react'
import { FaGoogle, FaGithubSquare } from "react-icons/fa";

const RightBar = () => {

    const handleGoogle = async () => {
        await authClient.signIn.social({
            provider: "google",
        });
    };

    const handleGithub = async () => {
        await authClient.signIn.social({
            provider: "github",
        });
    };

    return (
        <div className='font-bold text-3xl'>
            <h2>Login with</h2>

            <div className='flex flex-col gap-2 mt-2'>

                <button className='btn btn-outline btn-success' onClick={handleGoogle}>
                    <FaGoogle />
                    Login with Google
                </button>

                <button className='btn btn-outline btn-success' onClick={handleGithub}>
                    <FaGithubSquare />
                    Login with GitHub
                </button>

            </div>
        </div>
    )
}

export default RightBar;