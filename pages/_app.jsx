import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, toast } from 'react-toastify'
import { Fragment, useEffect } from 'react'
import { SessionProvider } from 'next-auth/react'

export default function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  useEffect(() => {
    let firstLogin = localStorage.getItem('firstLogin')
    if (firstLogin === 'true') {
      localStorage.removeItem('firstLogin')
      toast.success('Logged in successfully!')
    }
  }, [])
  return (
    <Fragment>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
      <ToastContainer position="bottom-right" theme="light" />
    </Fragment>
  )
}


