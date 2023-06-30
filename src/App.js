import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <div className="d-flex align-items-center header" role="search">
        <img src={logo} className="App-logo" alt="logo" style={{float: 'left'}} />
        <div className="box-search" style={{width: '50%'}}>
          <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-search" type="submit">
            <i className="fa fa-search"></i>
          </button>
        </div>
        <ul className='d-flex menu-header' style={{margin: '0'}}>
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
      <div className='w-100 d-flex align-items-center justify-content-center mt-5 text-center'>
        <div className='box-render'>
          <p className='header-text'>Hello World!</p>
          <h1 className='time-text'>
            {watch()}
          </h1>
        </div>
      </div>
    </>
  );
}

function watch() {
  return (new Date()).toLocaleTimeString();
}

export default App;
