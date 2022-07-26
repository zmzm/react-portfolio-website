import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from './components/Layout';
import './App.scss';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
