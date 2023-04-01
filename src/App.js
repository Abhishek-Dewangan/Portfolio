import React, { useContext } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, Navigate } from 'react-router-dom';

import { ThemeContext } from './contexts/ThemeContext';
import { Main, BlogPage, ProjectPage } from './pages';
import { BackToTop } from './components';
import ScrollToTop from './utils/ScrollToTop';

import './App.css';

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className='app'>
      <ScrollToTop />
      <Routes>
        <Route
          path='/'
          element={<Main />}
        />
        <Route
          path='/blog'
          element={<BlogPage />}
        />
        <Route
          path='/projects'
          element={<ProjectPage />}
        />
      </Routes>
      <Navigate to='/' />
      <BackToTop />
    </div>
  );
}

export default App;
