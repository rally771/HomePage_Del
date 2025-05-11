// import { useState } from 'react'
import './App.css'
import Nav from './layouts/Header'
import HomePage from './pages/Home'
import SearchDetails from './pages/SearchResults';
import { Routes, Route } from 'react-router-dom';
import {Footer} from './layouts/Footer'


function App() {

  return (
    <>
    <Nav/>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/search-details" element={<SearchDetails/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
