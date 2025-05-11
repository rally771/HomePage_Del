import Banner from '../layouts/Banner'
import ProductSearch from '../layouts/ProductSearch'
import Resources from '../layouts/Resources'
import GlobeSection from '../layouts/GlobeSection'
import FeaturedProducts from '../layouts/Products'
import {ContactUs } from '../layouts/Footer'



export default function HomePage(){
    return(
        <>
        <Banner/>
            <ProductSearch/>
            <FeaturedProducts/>
            <GlobeSection/>
            <Resources/>
            <ContactUs/>
        </>
    )
}