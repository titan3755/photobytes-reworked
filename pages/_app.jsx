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
        <link rel="shortcut icon" href="/final2.ico" />
        <link rel="image_src" href="https://scontent.fdac99-1.fna.fbcdn.net/v/t1.6435-9/200305969_118397360463291_7826146897949815642_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=wxwETRiVYZwAX_d53Lv&tn=2Lf_QzW68X2N8pun&_nc_ht=scontent.fdac99-1.fna&oh=00_AT8RWY_dabqRZyijufILyKKfXrhP9rIHTv88AFJw73ZZkg&oe=62D2AAB7" />
        <meta name="author" content="PhotoBytes Studios"/>
        <meta name="title" content="PhotoBytes Studios"/>
        <meta name="description" content="PhotoBytes Studios is an online digital services provider based in Bangladesh which provides customers worldwide with digital works."/>
        <meta name="keywords" content="GFX Design, Web Design, Motion GFX, Writing services, Digital Services"/>
        <meta name="robots" content="index, follow"/>
        <meta name="google-site-verification" content="RARba3YBMGCpdeNByyC5QCyn09EHJAqErGfKvZKx8JI"/>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="language" content="English"></meta>
      </Head>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
      <ToastContainer position="bottom-right" theme="light" />
    </Fragment>
  )
}


