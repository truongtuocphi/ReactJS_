// import logo from './logo.svg';
import './App.css';
import SongList from './components/SongList';
import SongDetail from './components/SongDetail';

function App() {
  return (
    <div className='h-screen flex justify-center items-center gap-5'>
      <SongList />
      <SongDetail />
    </div>
  );
}

export default App;
