import React, { Component } from 'react'
import LanguageContext from '../contexts/ColorContext'

export default class Field extends Component {
    static contextType = LanguageContext;

    render() {
        const text = this.context.language === 'english' ? 'Name' : 'Naam';
        return (
            <div>
                <label>{text}</label>
                <input />
            </div>
        )
    }
}
