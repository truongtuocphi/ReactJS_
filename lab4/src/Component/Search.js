import React, { Component } from 'react';
// import axios from 'axios';

export default class Search extends Component {
    state = { term: '' };

    onFromSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.term);
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className='w-full flex justify-center pt-3 mb-5'>
                <form onSubmit={this.onFromSubmit} className='w-3/4 h-10 relative'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="#5F5F5F" className="w-5 h-5 absolute left-3 top-3 translate-x-[-50] translate-y-[-50]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                    <input
                        type="text"
                        placeholder='Search'
                        // value={this.state.term}
                        onChange={e => this.setState({ term: e.target.value })}
                        className='border-2 container h-full rounded-full outline-0 px-10 py-5 text-lg bg-slate-100'
                    />
                </form>
            </div>
        )
    }
}
