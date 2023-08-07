import React from 'react'
// import { Link } from 'react-router-dom'

export default function DropDown({ Bgcolor, listMenu,  }) {
  return (
    <div 
        style={{"boxShadow": "0 -4px 32px rgba(0,0,0,.2)"}}
        className={`w-60 right-10 z-50 absolute px-2 py-2 bg-${Bgcolor} rounded-lg`}
    >
      <ul>
        {listMenu.map(item => (
          <li key={item.id} className='py-2 px-4 rounded-md cursor-pointer hover:bg-slate-100'>
            <a className='block w-full h-full' href={`${item.router}`}>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
