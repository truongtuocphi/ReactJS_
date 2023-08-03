/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from 'react-router-dom'
import { faHouse, faRoad, faGraduationCap, faBlog } from '@fortawesome/free-solid-svg-icons'

const ListMenu = [
  { name: "Home", icon: faHouse, router: '/' },
  { name: "Lộ trình", icon: faRoad, router: '/learning-path' },
  { name: "Học", icon: faGraduationCap, router: '/learn' },
  { name: "Blog", icon: faBlog, router: '/blog' },
];

export default function Menu() {
  return (
    <div className='w-24 h-screen fixed flex flex-col items-center pt-3 px-2'>
      <div className='mt-2 bg-blue-600 w-11 h-11 rounded-full items-center flex justify-center'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" strokeWidth={2} stroke="#ffff" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </div>
      <ul className='my-2.5'>
        {ListMenu.map(item => (
          <li key={item.name} className='h-[72px] w-[72px] mt-1 flex justify-center items-center rounded-xl hover:bg-gray-200'>
            <NavLink to={`${item.router}`} className="h-full w-full flex flex-col justify-center text-center gap-1 rounded-xl">
              <FontAwesomeIcon icon={item.icon} size="lg" color='#404040' />
              <span className='text-xs'>{item.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}