import { Fragment } from 'react'

export default function NotFound () {
    return (
        <Fragment>
            <div className="container flex flex-col align-middle justify-center min-h-full min-w-full bg-slate-50 shadow-lg p-20 my-5">
                <div className="container flex flex-col align-middle justify-center my-5 border-dashed border-8 border-slate-400 p-10">
                    <h1 className="text-red-600 text-center text-5xl font-extrabold my-2">404</h1>
                    <p className="text-black text-center text-xl font-semibold mt-4 my-2">The requested URL does not have a page associated to it</p>
                </div>
            </div>
        </Fragment>
    )
}