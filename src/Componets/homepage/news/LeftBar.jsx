import Link from 'next/link'
import React from 'react'

const LeftBar = ({ categories, activeID }) => {
    return (
        <div>
            <h2 className="font-bold text-xl mb-4">All Categories</h2>

            <ul className="flex flex-col gap-2">
                {categories.map((cat) => (
                    <li
                        key={cat.category_id}
                        className={`
                        ${activeID === cat.category_id ? 'bg-slate-100' : ''} 
                         p-2 rounded font-bold text-center flex items-start cursor-pointer hover:bg-slate-200 transition
                        `}  >

                        <Link href={`/categories/${cat.category_id}`} className='block' >
                            {cat.category_name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default LeftBar
