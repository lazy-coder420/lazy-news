import React from 'react'
import Marquee from 'react-fast-marquee'

const Breaking = () => {
    return (
        <div className='flex justify-between gap-4 items-center bg-gray-300 container mx-auto px-4 py-2'>
            <button className='btn btn-error text-white '>Latest</button>
            <Marquee pauseOnHover={true} speed={100} >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla assumenda minima doloremque. Voluptate laborum quo in enim nam. Exercitationem odit cumque temporibus eos id ipsam minima molestiae ad perferendis quae?
            </Marquee>
        </div>
    )
}

export default Breaking
