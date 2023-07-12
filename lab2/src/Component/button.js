import React from 'react'

export default function Button({ text, colorElelemt }) {
    return (
        <button
            className='rounded'
            style = {
                {
                    width: '50%',
                    padding: '5px 10px',
                    background: 'none',
                    color: colorElelemt,
                    border: `1px solid ${colorElelemt}`,
                    fontWeight: '600'
                }
            }
        >
        {text}
        </button>
    )
}
