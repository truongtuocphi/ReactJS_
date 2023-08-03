import './App.css';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom'
import Menu from './components/Menu'
import Home from './page/Home';
import Learn from './page/Learn';
import LearningPath from './page/LearningPath';
import Blog from './page/Blog';

function App() {
  return (
    <>
      <Header />
      <div className='flex min-w-screen relative top-[68px]'>
        <Menu />
        <div className='w-full max-w-screen-page px-5 mt-4 absolute right-0'>
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/learning-path" element={ <LearningPath /> } />
            <Route path="/learn" element={ <Learn /> } />
            <Route path="/blog" element={ <Blog /> } />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
