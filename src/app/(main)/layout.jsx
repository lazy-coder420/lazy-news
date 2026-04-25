import Breaking from '@/Componets/shraed/Breaking'
import Header from '@/Componets/shraed/Header'
import Navbar from '@/Componets/shraed/Navbar'
import React from 'react'

const MainLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <Breaking />
            <Navbar />

            {children}
        </div>
    )
}

export default MainLayout
