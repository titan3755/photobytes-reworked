import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { Fragment } from 'react'

export default function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Component {...pageProps} />
      <ToastContainer position="bottom-right" theme="light" />
    </Fragment>
  )
}


