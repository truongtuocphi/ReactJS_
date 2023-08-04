import React from 'react'

export default function Course({ title, imgCourse }) {
  return (
    <div className=''>
        <div className='cursor-pointer w-ull h-36'>
            <img className='rounded-2xl w-full h-full' src={imgCourse} alt={imgCourse} />
        </div>
        <div className='mt-3'>
          <h3 className='text-lg font-semibold text-zinc-700'>{title}</h3>
        </div>
    </div>
  )
}
