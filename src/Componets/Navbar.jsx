import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import user from '@/assets/image/user.png'

const Navbar = () => {
  return (
    <div className=' flex  justify-between mx-auto container'>
      <div></div>
      <ul className='flex gap-4 items-center'>
        <li>
          <Link href={'/'}>Home</Link>
        </li>


        <li>
          <Link href={'/About'}>About</Link>
        </li>
        <li>
          <Link href={'/Career'}>Career</Link>
        </li>
      </ul>


      <div className='flex gap-4'>
        <Image src={user} alt='user' className='w-10 h-10 rounded-full' />
        <button className=' btn btn-success '>
          <Link href={'/Login'}>Login</Link>
        </button>
      </div>

    </div>
  )
}

export default Navbar
