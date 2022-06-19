import { Fragment } from 'react'

export default function Cta () {
    return (
        <Fragment>
            <div className="container min-w-full p-10 flex flex-col xl:flex-row align-middle justify-center my-10">
                <div className="container flex flex-col xl:flex-row align-middle justify-center">
                    <div className="container flex flex-row align-middle justify-center w-full xl:w-[50%]">
                        <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" className="object-cover w-full rounded-t-lg xl:rounded-t-none xl:rounded-l-lg" />
                    </div>
                    <div className="container bg-slate-700 w-full xl:w-[50%] h-full p-10 flex flex-col justify-center rounded-b-lg xl:rounded-b-none xl:rounded-r-lg">
                        <h1 className="text-slate-400 mx-auto sm:mx-0 text-base font-semibold my-2">BLAZING FAST RESPONSES</h1>
                        <h1 className="text-white mx-auto sm:mx-0 text-4xl text-center sm:text-left font-extrabold my-2">We're here to help</h1>
                        <p className="text-slate-300 mx-auto sm:mx-0 text-center sm:text-left text-base font-normal my-2 w-auto sm:w-[500px]">Facing any problems with our services or do you want to provide feedback or complaints? Contact us directly by Facebook Messenger or via other platforms to let us know of your problems! We'll make sure that you are satisfied with our services and your feedback is greatly appreciated.</p>
                        <a className="p-4 mx-auto sm:mx-0 w-[200px] bg-white text-black font-medium text-lg rounded-lg mt-7 text-center hover:scale-[96%] transition-transform duration-200" href="">Customer Support</a>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}