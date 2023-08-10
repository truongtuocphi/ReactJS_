import React, { Component } from 'react'
import ColorContext from '../contexts/ColorContext'
import LanguageContext from '../contexts/ColorContext'

export default class Button extends Component {
    renderSubmit(language) {
        return language === 'english' ? 'submit' : 'Voorleggen';
    }

    renderButton(color) {
        return (
            <button className={`text-${color}-500`}>
                <LanguageContext.Consumer>
                    {({ language }) => this.renderSubmit(language)}
                </LanguageContext.Consumer>
            </button>
        )
    }
    render() {
        return (
            <ColorContext.Consumer>
                {color => this.renderButton(color)}
            </ColorContext.Consumer>
        )
    }
}
