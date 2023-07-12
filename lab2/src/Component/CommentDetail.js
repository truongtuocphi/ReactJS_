import React from 'react';

function commentDetail({ commentText, userName, userAvatar, commentTime }) {
    return (
        <>
            <div className='avatar-user rounded'>
                <img src={userAvatar} alt="" className='rounded' style={{width: '75px'}} />
            </div>
            <div className='info-user'>
                <div className='d-flex gap-2 align-items-baseline'>
                    <h4 className='text-dark'>{userName}</h4>
                    <p className='m-0 text-secondar'>{commentTime}</p>
                </div>
                <div className='text-comment'>
                    <p>{commentText}</p>
                </div>
            </div>
        </>
    )
};

export default commentDetail;