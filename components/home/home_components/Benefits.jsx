import { Fragment } from 'react'
import { benefitCards } from '../../../data/iterators'

export default function Benefits () {
    return ( 
        <Fragment>
            <div className="container bg-white flex flex-col align-middle justify-center min-w-full">
                <img src="" className="min-w-full object-cover h-[400px] md:h-[600px] bg-gradient-to-r from-purple-500 to-pink-400" alt="" />
                <div className="container absolute top-50 left-50 p-20 flex flex-col align-middle justify-center min-w-full">
                    <h1 className="text-center mx-auto text-4xl md:text-7xl font-bold md:font-extrabold font-sans text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                </div>
            </div>
        </Fragment>
    )
}