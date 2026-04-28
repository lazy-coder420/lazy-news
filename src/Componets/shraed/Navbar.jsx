'use client';

import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import user from '@/assets/image/user.png'
import NavLink from './Navlink'
import { authClient } from '@/lib/auth-client'
import { button } from 'framer-motion/client';
import { LogOut } from 'lucide-react';

const Navbar = () => {


  const { data: session, isPending } = authClient.useSession()
  const user = session?.user;

  console.log(user, "session")

  return (
    <div className=' mt-2 flex  justify-between mx-auto container'>
      <div></div>
      <ul className='flex gap-4 items-center'>
        <li>
          <NavLink href={'/'}>Home</NavLink>
        </li>


        <li>
          <NavLink href={'/about'}>About</NavLink>
        </li>
        <li>
          <NavLink href={'/career'}> Career</NavLink>
        </li>
      </ul>




      {isPending ? (
        <p className="text-gray-500 text-sm">Loading...</p>
      ) : user ? (
        <div className="flex items-center gap-4">
          <h2 className="text-sm font-medium">
            Hello, {user?.name || "User"}
          </h2>

          <Image
            src={user?.image || "/default-avatar.png"}
            alt="user"
            width={40}
            height={40}
            className="rounded-full object-cover"
          />

          <button className="bg-red-500 hover:bg-red-600 text-white px-4  py-2 rounded-md transition " onClick={async () => await authClient.signOut()}>
            Logout
          </button>
        </div>
      ) : (
        <Link href="/login" className="btn btn-success">
          Login
        </Link>
      )}



    </div>
  )
}

export default Navbar;
