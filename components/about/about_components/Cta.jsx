import { Fragment } from 'react'

export default function Cta () {
    return (
        <Fragment>
            <div className="container min-w-full p-10 flex flex-row align-middle justify-center my-10">
                <div className="container flex flex-row align-middle justify-center">
                    <div className="container flex flex-row align-middle justify-center w-[50%]">
                        <img src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&w=3840&q=80" alt="" className="object-cover w-full rounded-l-lg" />
                    </div>
                    <div className="container bg-slate-700 w-[50%] h-full p-10 flex flex-col justify-center rounded-r-lg">
                        <h1 className="text-slate-400 text-base font-semibold my-2">AWARD WINNING SUPPORT</h1>
                        <h1 className="text-white text-4xl font-extrabold my-2">We're here to help</h1>
                        <p className="text-slate-300 text-base font-normal my-2 w-[500px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est neque sit rem iusto quod quidem vero, blanditiis commodi repellendus eos similique. Libero velit odio laudantium. Lorem ipsum dolor sit amet.</p>
                        <button className="p-4 w-[200px] bg-white text-black font-medium text-lg rounded-lg my-5">Customer Support</button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}