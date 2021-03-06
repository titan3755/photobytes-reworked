import { Fragment } from 'react'
import Link from 'next/link'

export default function Hero () {
    return (
        <Fragment>
            <div className="container flex flex-col-reverse align-middle justify-center shadow-lg rounded min-w-full lg:flex-row">
                <div className="container min-w-full lg:min-w-min flex flex-col align-middle justify-center p-20">
                    <h1 className="lg:text-5xl text-4xl font-sans font-bold lg:font-extrabold text-center lg:text-left text-black">
                        Welcome to <span className="lg:text-5xl text-4xl font-sans font-bold lg:font-extrabold text-center lg:text-left text-rose-500">PhotoBytes Studios</span>
                    </h1>
                    <p className="font-medium text-slate-500 text-base lg:text-lg mt-8 w-auto text-center lg:text-left lg:w-[650px]">We provide online services. GFX Design, Web Design, Motion GFX, writing services are available from PhotoBytes Studios. To view all our services, visit the store page or if you got any enquiries, feel free to contact us.</p>
                    <div className="container flex flex-row align-middle justify-center lg:justify-start mt-10 gap-4">
                        <a href="https://www.facebook.com/PhotoBytes999" className="p-3 text-center rounded shadow-xl w-[140px] font-semibold text-xl text-white bg-rose-600 hover:bg-rose-700">
                            Store
                        </a>
                        <Link href="/contact">
                            <a className="p-3 text-center rounded w-[140px] font-semibold text-rose-600 text-xl bg-rose-100 hover:bg-rose-200">
                                Contact
                            </a>
                        </Link>
                    </div>
                </div>
                <img src="https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3840&q=80" className="object-cover w-full h-[400px] lg:w-[30%] lg:h-[600px]" alt="" />
            </div>
        </Fragment>
    )
}