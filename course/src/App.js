import './App.css';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react';
// import axios from 'axios';
import Menu from './components/Menu'
import Home from './page/Home';
import Footer from './components/Footer';

// import page website
import Learn from './page/Learn';
import LearningPath from './page/LearningPath';
import CourseDetail from './page/CourseDetail';
import BlogDetail from './page/BlogDetail';
import Blog from './page/Blog';
import Login from './page/Login';

function App() {
  const [check, setCheck] = useState(false)
  const isLoginPage = window.location.href.split('/')[3] === 'login';
  
  useEffect(() => {
    setCheck(isLoginPage);
  }, [isLoginPage])

  return (
    <>
      {!check ? <Header /> : null}
      <div className='flex min-w-screen'>
        <div className='sticky top-[74px] z-30'>
        {!check ? <Menu /> : null}
        </div>
        <div className={`w-full ${!check ? "max-w-screen-page" : ''} px-5 mt-5 relative`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/learning-path" element={<LearningPath />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/course-detail/:id" element={<CourseDetail />} />
            <Route path="/blog-detail" element={<BlogDetail />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
      {!check ? <Footer /> : null}
    </>
  );
}

export default App;
