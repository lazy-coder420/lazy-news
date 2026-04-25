import React from 'react'
import { FaGoogle } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";



const RightBar = () => {
    return (
        <div className='font-bold text-3xl'>
            <h2>Login with </h2>
            <div className='flex flex-col gap-2 mt-2 '>

                <button className='btn btn-outline btn-success'>
                    <FaGoogle />
                    Login with google
                </button>
                <button className='btn btn-outline btn-success '>
                    <FaGithubSquare />
                    Login with github
                </button>
            </div>

        </div>
    )
}

export default RightBar
