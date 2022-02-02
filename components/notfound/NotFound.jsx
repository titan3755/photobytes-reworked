import { Fragment } from 'react'

export default function NotFound () {
    return (
        <Fragment>
            <div className="container flex flex-col align-middle justify-center min-w-full bg-slate-50 shadow-lg p-20 my-5">
                <div className="container flex flex-col align-middle justify-start my-5">
                    <h1 className="text-slate-800 text-left text-2xl font-bold my-2">404</h1>
                    <p className="text-slate-500 text-left text-base font-normal w-[550px]">Page not found</p>
                </div>
            </div>
        </Fragment>
    )
}