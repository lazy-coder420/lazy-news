import Navbar from '@/Componets/Navbar'
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
