import React from 'react'

export default function Course({ title, imgCourse, router }) {
  return (
    <div className=''>
        <div className='cursor-pointer'>
            <img className='rounded-2xl' src={imgCourse} alt={imgCourse} />
        </div>
        <div className='mt-3'>
            <a href='#course'>
                <h3 className='text-lg font-semibold text-zinc-700'>{title}</h3>
            </a>
        </div>
    </div>
  )
}
