// import { useState } from 'react'
import './App.css'
import Nav from './layouts/Header'
import HomePage from './pages/Home'
import SearchDetails from './pages/SearchResults';
import { Routes, Route } from 'react-router-dom';
import {Footer} from './layouts/Footer'
import DataProvider from './context/DataProvider';


function App() {

  return (
    <>
    <DataProvider>
    <Nav/>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/search-details" element={<SearchDetails/>} />
    </Routes>
    </DataProvider>
    <Footer/>
    </>
  )
}

export default App
