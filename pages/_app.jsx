import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, toast } from 'react-toastify'
import { Fragment, useEffect } from 'react'
import { SessionProvider } from 'next-auth/react'
import { useRouter } from 'next/router'
import Head from 'next/head'

export default function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  useEffect(() => {
    let firstLogin = localStorage.getItem('firstLogin')
    if (firstLogin === 'true') {
      localStorage.removeItem('firstLogin')
      toast.success('Logged in successfully!')
    }
  }, [])
  const router = useRouter()
  return (
    <Fragment>
      <Head>
        <title>PhotoBytes Studios{router.pathname === "/" ? " - Home" : router.pathname === "/contact" ? " - Contact" : router.pathname === "/about" ? " - About" : router.pathname === "/privacy" ? " - Privacy & ToS" : ""}</title>
      </Head>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
      <ToastContainer position="bottom-right" theme="light" />
    </Fragment>
  )
}


