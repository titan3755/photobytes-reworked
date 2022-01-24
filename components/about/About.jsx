import { Fragment } from 'react'
import Navbar from '../navbars/Navbar'
import Footer from '../footers/Footer'
import Hero from './about_components/Hero'
import Content from './about_components/Content'

export default function About () {
    return (
        <Fragment>
            <Navbar />
            <Hero />
            <Content />
            <Footer />
        </Fragment>
    )
}