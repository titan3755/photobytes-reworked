import { Fragment } from 'react'

export default function Form () {
    return (
        <Fragment>
            <div className="container flex flex-row align-middle justify-center p-5 min-w-full h-[1000px] my-5">
                <div className="container flex flex-col align-middle justify-center w-[50%] h-full p-16">
                    <h1 className="text-4xl font-extrabold font-sans text-center mb-4">Lorem ipsum dolor sit amet</h1>
                    <p className="text-base font-light font-sans text-center text-slate-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, officia impedit voluptas corrupti voluptatum magni.</p>
                    <div className="container flex flex-row gap-5 justify-center align-middle my-2 mt-6">
                        <input type="text" className="w-[50%] rounded-md p-2 pl-5 pr-5 border-[1px] border-slate-500 bg-white font-sans text-base font-medium focus:outline-2 focus:outline-rose-500" placeholder="First Name" name="fn" />
                        <input type="text"  className="w-[50%] rounded-md p-2 pl-5 pr-5 border-[1px] border-slate-500 bg-white font-sans text-base font-medium focus:outline-2 focus:outline-rose-500" placeholder="Last Name" name="ln" />
                    </div>
                    <input type="email"  className="my-2 rounded-md p-2 pl-5 pr-5 border-[1px] border-slate-500 bg-white font-sans text-base font-medium focus:outline-2 focus:outline-rose-500" placeholder="Email Address" name="" />
                    <input type="text"  className="my-2 rounded-md p-2 pl-5 pr-5 border-[1px] border-slate-500 bg-white font-sans text-base font-medium focus:outline-2 focus:outline-rose-500" placeholder="Contact Links" name="" />
                    <textarea name="" placeholder="Message Body" className="my-2 rounded-md p-2 pl-5 pr-5 border-[1px] border-slate-500 bg-white font-sans text-base font-medium focus:outline-2 focus:outline-rose-500" cols="30" rows="10"></textarea>
                    <button type="submit" className="bg-rose-500 p-4 text-center text-white text-xl font-bold rounded-lg hover:bg-rose-600 my-4 w-[500px] mx-auto">Submit</button>
                </div>
                <div className="container flex flex-row align-middle justify-center w-[50%] h-full p-16">
                    <img src="https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" className="object-cover h-[700px] w-full mt-10 rounded-md" alt="" />
                </div>
            </div>
        </Fragment>
    )
}