import { Fragment } from 'react'
import Navbar from '../navbars/Navbar'
import Footer from '../footers/Footer'
import Hero from './home_components/Hero'
import Services from './home_components/Services'
import Features from './home_components/Features'
import Benefits from './home_components/Benefits'
import Newsletter from './home_components/Newsletter'

export default function Home () {
    return (
        <Fragment>
            <Navbar />
            <Hero />
            <Services />
            <Features />
            <Benefits />
            <Newsletter />
            <Footer />
        </Fragment>
    )
}
