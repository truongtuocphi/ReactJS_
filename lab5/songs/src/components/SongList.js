import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectSong } from '../actions'

class SongList extends Component {
  renderList() {
    console.log(this.props);
    return this.props.songs.map(song => {
        return (
            <div key={song.title} className='flex justify-between p-3'>
                <div className='font-semibold text-neutral-500'>{song.title}</div>
                <button
                  className='bg-emerald-200 text-emerald-600 px-4 py-1 rounded-lg border-2 border-emerald-400 font-medium' 
                  onClick={() => this.props.selectSong(song)} 
                >
                  Select
                </button>
            </div>
        )
    })
  }
  
  render() {
    return <div className='w-96 bg-white p-5 rounded-xl text-lg shadow-xl'>{ this.renderList() }</div>
  }
}

const mapStateToProps = state => {
    return { songs: state.songs }
}

export default connect(
    mapStateToProps,
    { selectSong }
)(SongList);