import React from 'react'

const Spinner = ({ text }) => {
    return (
        <>
            <div className="spinner-container d-flex flex-column">
                <div className="spinner"></div>
                <h3 style={{ color: 'white' }}>{text}</h3>
            </div>
        </>
    )
}

export default Spinner;
