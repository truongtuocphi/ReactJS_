import React, { Component } from 'react';
import axios from 'axios';

export default class Search extends Component {
    state = { term: '' };

    API_kEY = 'rcydsMMCtThSv5Q14vsTwOArhBzeMl58OjcFYSr-BUU'; 

    onFromSubmit = (event) => {
        event.preventDefault();
        // console.log(this.state.term);
        try {
            // const reponse = await axios.get(this.Ap)
        }catch {

        }
    }

    render() {
        return (
            <div className='w-full flex justify-center pt-2'>
                <form onSubmit={this.onFromSubmit}>
                    <label>Image Search</label>
                    <input
                        type="text"
                        // value={this.state.term}
                        onChange={e => this.setState({ term: e.target.value })}
                        className='border-2'
                    />
                </form>
            </div>
        )
    }
}
