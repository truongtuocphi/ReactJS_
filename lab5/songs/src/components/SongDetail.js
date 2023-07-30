import React from 'react'
import { connect } from 'react-redux'

const SongDetail = ({ song }) => {
    if(!song) {
        return <div className='w-[344px] h-[296px] bg-white p-5 rounded-xl'>
            <h1 className='text-2xl font-semibold mb-2'>Music</h1>
            <div className='text-lg'>Select a song</div>
        </div>
    }

    return (
        <div className='w-[344px] h-[296px] bg-white p-5 rounded-xl'>
            <h1 className='text-2xl font-semibold mb-2'>Music</h1>
            <div className='text-lg'>Title: {song.title}</div>
            <div className='text-lg'>Duration: {song.duration}</div>
        </div>
    )
}

const mapStateToProps = state => {
    return { song: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetail)