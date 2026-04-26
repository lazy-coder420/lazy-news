import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import user from '@/assets/image/user.png'
import NavLink from './Navlink'

const Navbar = () => {
  return (
    <div className=' flex  justify-between mx-auto container'>
      <div></div>
      <ul className='flex gap-4 items-center'>
        <li>
          <NavLink href={'/'}>Home</NavLink>
        </li>


        <li>
          <NavLink href={'/About'}>About</NavLink>
        </li>
        <li>
          <NavLink href={'/Career'}>Career</NavLink>
        </li>
      </ul>


      <div className='flex gap-4'>
        <Image src={user} alt='user' className='w-10 h-10 rounded-full' />

        {/* 🔥 FIXED LOGIN BUTTON */}
        <Link href="/login" className="btn btn-success">
          Login
        </Link>
      </div>

    </div>
  )
}

export default Navbar
