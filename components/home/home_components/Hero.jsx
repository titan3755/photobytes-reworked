import { Fragment } from 'react'

export default function Hero () {
    return (
        <Fragment>
            <div className="container flex flex-row align-middle justify-center shadow-lg rounded min-w-full">
                <div className="container flex flex-col align-middle justify-center p-20">
                    <h1 className="text-5xl font-sans font-extrabold first-line:text-black text-rose-500">
                        Lorem ipsum dolor sit, amet consectetur adipisicing.
                    </h1>
                    <p className="font-medium text-slate-500 text-lg mt-8 w-[650px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse enim nihil, eum impedit aspernatur cum expedita commodi veritatis debitis. Tempora dolore debitis incidunt eaque nostrum.</p>
                    <div className="container flex flex-row align-middle justify-start mt-10 gap-4">
                        <button className="p-3 rounded shadow-xl w-[140px] font-semibold text-xl text-white bg-rose-600 hover:bg-rose-700">
                            Store
                        </button>
                        <button className="p-3 rounded w-[140px] font-semibold text-rose-600 text-xl bg-rose-100 hover:bg-rose-200">
                            Contact
                        </button>
                    </div>
                </div>
                <img src="https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3840&q=80" className="object-cover w-[30%] h-[600px]" alt="" />
            </div>
        </Fragment>
    )
}