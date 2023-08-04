import './App.css';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom'
import Menu from './components/Menu'
import Home from './page/Home';
import Footer from './components/Footer';

// import page website
import Learn from './page/Learn';
import LearningPath from './page/LearningPath';
import CourseDetail from './page/CourseDetail';
import Blog from './page/Blog';

function App() {
  return (
    <>
      <Header />
      <div className='flex min-w-screen relative top-[68px]'>
        <Menu />
        <div className='w-full max-w-screen-page h-72 px-5 mt-5 absolute right-0'>
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/learning-path" element={ <LearningPath /> } />
            <Route path="/learn" element={ <Learn /> } />
            <Route path="/blog" element={ <Blog /> } />
            <Route path="/course-detail" element={ <CourseDetail  /> } />
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
