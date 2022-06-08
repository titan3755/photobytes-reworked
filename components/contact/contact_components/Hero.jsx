import { Fragment } from 'react'

export default function Hero () {
    return (
        <Fragment>
            <div className="container bg-white flex flex-col align-middle justify-center min-w-full">
                <img src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3840&q=80" className="object-cover contrast-125 saturate-200 min-w-full h-[500px] lg:h-[700px] brightness-50" alt="" />
                <div className="container absolute top-50 left-50 p-20 flex flex-col align-middle justify-center min-w-full">
                    <h1 className="text-center mx-auto text-5xl lg:text-7xl font-sans font-bold lg:font-extrabold text-white my-3">Contact Us</h1>
                    <p className="text-center mx-auto text-base font-sans font-normal text-slate-300 my-3 lg:w-[650px]">PhotoBytes Studios customer support is blazing fast. If you got any enquiries or if you need help with anything related to PhotoBytes Studios then feel free to contact us!</p>
                </div>
            </div>
        </Fragment>
    )
}