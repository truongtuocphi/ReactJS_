import React from 'react'

export default function DropDown({ Bgcolor }) {
  return (
    <div 
        style={{"boxShadow": "0 -4px 32px rgba(0,0,0,.2)"}}
        className={`w-60 right-10 z-50 absolute px-6 py-2 bg-${Bgcolor} rounded-lg`}
    >
        <div className='py-2'>Option 1</div>
        <div className='py-2'>Option 1</div>
        <div className='py-2'>Option 1</div>
    </div>
  )
}
