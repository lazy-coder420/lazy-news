import Header from '@/Componets/Header'
import Navbar from '@/Componets/Navbar'
import React from 'react'

const MainLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <Navbar />

            {children}
        </div>
    )
}

export default MainLayout
