import { Fragment } from 'react'

export default function NotFound () {
    return (
        <Fragment>
            <div>
                <div className="bg-white w-[600px] h-[450px] flex flex-col align-middle justify-center p-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <h2 className="text-red-600 text-center text-5xl font-bold">Page not found!</h2>
                    <p className="text-black text-center text-lg font-medium mt-5">The requested URL does not have a page associated with it</p>
                </div>
            </div>
        </Fragment>
    )
}