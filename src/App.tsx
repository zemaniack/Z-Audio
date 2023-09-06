import { useState } from 'react'
import './App.css'
import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Navbar } from './components/navbar/Navbar'
import { ConfigProvider, theme, AutoComplete } from 'antd'
import { Profile } from './pages/Profile';
import { Products } from './pages/Products';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="App">
      <ConfigProvider
        theme={{
          algorithm: theme.darkAlgorithm,
        }}
      >
        <Navbar />
        <div className='page-container'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </div>
      </ConfigProvider>
    </div>
  )
}

export default App
