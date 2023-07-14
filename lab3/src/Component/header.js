import React, { Component } from 'react'
import logo from '../logo.svg';

export default class Header extends Component {
    render() {
        return (
            <div className="d-flex align-items-center header" role="search">
                <img src={logo} className="App-logo" alt="logo" style={{ float: 'left' }} />
                <div className="box-search" style={{ width: '50%' }}>
                    <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-search" type="submit">
                        <i className="fa fa-search"></i>
                    </button>
                </div>
                <ul className='d-flex menu-header' style={{ margin: '0' }}>
                    <li>
                        <a href="http://localhost:3000/">Home</a>
                    </li>
                    <li>
                        <a href="http://localhost:3000/">Learn</a>
                    </li>
                    <li>
                        <a href="http://localhost:3000/">Contact</a>
                    </li>
                    <li>
                        <a href="http://localhost:3000/">Blog</a>
                    </li>
                </ul>
            </div>
        )
    }
}
