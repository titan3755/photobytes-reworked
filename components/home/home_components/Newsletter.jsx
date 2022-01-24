import { Fragment } from 'react'

export default function Newsletter () {
    return (
        <Fragment>
            <div className="container h-[600px] flex flex-col align-middle justify-center min-w-full p-10 bg-slate-100">
                <h1 className="text-center mx-auto text-[55px] font-extrabold font-sans mt-10 w-[800px]">Subscribe to our newsletter!</h1>
                <p className="text-center mx-auto text-lg font-medium text-slate-500 my-2 w-[700px]">Lorem ipsum dolo laudantium spernatur nobisumenda sequi aliqtaque debitis vel similique fuga. Suscipit nesciunt, molestiae ab distinctio in deleniti dolorem! Omnis.</p>
                <div className="container align-middle justify-center mx-auto flex flex-row mt-6 mb-16">
                    <input type="text" className="w-[300px] border-2 text-black border-black bg-white p-2 pl-4 pr-4 rounded-l-md" placeholder="Your email address" />
                    <button className="p-2 w-[80px] rounded-r-md bg-black text-white font-medium" type="submit">Submit</button>
                </div>
            </div>
        </Fragment>
    )
}