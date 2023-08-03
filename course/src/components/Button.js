import React from 'react'

export default function Button({ text, bgColor, paddingX, paddingY, color, radius }) {
  return (
    <div className={`px-${paddingX} py-${paddingY} bg-blue-100 rounded-${radius} cursor-pointer`}>
        <p className={`text-${color} font-medium`}>{ text }</p>
    </div>
  )
}