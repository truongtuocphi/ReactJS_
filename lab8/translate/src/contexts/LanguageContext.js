import React, { Component } from 'react'

export default class LanguageContext extends Component {
    state = { language: 'english' };
    
    onLanguageChange = language => {
        this.setState({ language })
    }

    render() {
    return (
      <this.Context.Provider
        value={{...this.state, onLanguageChange: this.onLanguageChange}}
      >
        {this.props.children}
      </this.Context.Provider>
    )
  }
}
