import React from 'react'

export default function Button({ text, colorElelemt }) {
    return (
        <button 
            style = {
                {
                    width: '50%',
                    padding: '5px 10px',
                    background: 'none',
                    color: colorElelemt,
                    border: `1px solid ${colorElelemt}`
                }
            }
        >
        {text}
        </button>
    )
}
