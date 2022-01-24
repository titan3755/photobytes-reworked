import { Fragment } from 'react'
import Navbar from '../navbars/Navbar'
import Footer from '../footers/Footer'
import Hero from './contact_components/Hero'
import Form from './contact_components/Form'

export default function Contact () {
    return (
        <Fragment>
            <Navbar />
            <Hero />
            <Form />
            <Footer />
        </Fragment>
    )
}