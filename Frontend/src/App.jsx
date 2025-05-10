// import { useState } from 'react'
import './App.css'
import Nav from './layouts/Header'
import Banner from './layouts/Banner'
import ProductSearch from './layouts/ProductSearch'
import FeaturedProducts from './layouts/Products'
import {ContactUs , Footer} from './layouts/Footer'
import Resources from './layouts/Resources'
import GlobeSection from './layouts/GlobeSection'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Nav/>
    <Banner/>
    <ProductSearch/>
    <FeaturedProducts/>
    <GlobeSection/>
    <Resources/>
    <ContactUs/>
    <Footer/>
    
    </>
  )
}

export default App
