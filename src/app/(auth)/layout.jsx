
import Navbar from '@/Componets/shraed/Navbar'
import React from 'react'

const AuthLayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}

export default AuthLayout
