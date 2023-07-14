// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import SeasonDisplay from './Component/SeasonDisplay'
import Spinner from './Component/Spinner';
// import Header from './Component/header';

class App extends Component {
  state = {
    lat: null,
    errorMessage: '',
    loading: true, // Thêm trạng thái loading
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
        this.stopLoading();
      },
      err => {
        this.setState({ errorMessage: err.message });
        this.stopLoading();
      }
    );
  }

  stopLoading() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 2000);
  }

    render() {
      if (this.state.loading) {
        return <Spinner text="Please accept location request" />;
      }

      if (this.state.errorMessage && !this.state.lat) {
        return <div>Error: {this.state.errorMessage}</div>
      }
      if (!this.state.errorMessage && this.state.lat) {
        return <SeasonDisplay lat={this.state.lat} />
      }

      return (
        <Spinner text="Please accept location request" />
      );
    }
  }

export default App;
