// import logo from './logo.svg';
import './App.css';
import Search from './Component/Search';
import React, { Component } from 'react';
import  axios from 'axios';

export default class App extends Component {
  state = { image: [] }

  onSearchSubmit = async (term) => {
    const reponse = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization:
        'Client-ID 92cEjPgQH9ucxVAqH8o2rCus0w8sgAtsqsswDT3xyYU',
      },
    });
    this.setState({ image: reponse.data.results });
    console.log(reponse.data.results);
  }

  render() {
    return (
      <div>
        <Search onSubmit={this.onSearchSubmit} />
        {/* Found: { this.state.image.length } images */}
        <div className='container px-[7%] mx-auto columns-3'>
          { this.state.image.map((items, index) => (
            <div key={index} className='flex mb-4'>
              <img className='rounded-lg'  src={items.urls.regular} alt="" />
            </div>
          )) }
        </div>
      </div>
    )
  }
}