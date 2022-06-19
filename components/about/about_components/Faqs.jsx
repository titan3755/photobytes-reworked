import { Fragment } from 'react'
import { faqCards } from '../../../data/iterators'
import { v4 } from 'uuid'

function FaqCard ({title, desc, imgSrc}) {
    return (
        <Fragment>
            <div className="container flex flex-col align-middle justify-center md:h-[400px] lg:h-[500px] h-[530px] hover:scale-[102%] transition-all duration-300 md:my-0 my-5">
                <div className="container shadow-2xl h-full max-h-full">
                    <div className="container flex flex-row align-middle justify-center w-full h-1/2 md:hidden lg:block">
                        <img src={imgSrc} className="h-full mx-auto w-full md:hidden lg:block object-cover" alt="img not available" />
                    </div>
                    <div className="container flex flex-col align-middle justify-center rounded-b md:rounded-b-lg p-7">
                        <h1 className="mb-2 text-2xl font-extrabold md:text-lg md:mx-0 md:font-bold">{title}</h1>
                        <p className="text-base text-slate-400 font-normal">{desc}</p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default function Faqs () {
    return (
        <Fragment>
            <div className="container flex flex-col align-middle justify-center min-w-full bg-slate-100 shadow-lg p-10 md:p-20 my-5">
                <div className="container flex flex-col align-middle justify-start ml-0 md:ml-5 my-5">
                    <h1 className="text-slate-800 text-center md:text-left text-2xl font-bold my-2">Frequently asked questions</h1>
                    <p className="text-slate-500 text-center md:text-left text-base font-normal w-auto md:w-[550px]">Below are some of the most common questions as well as answers regarding our services which confuse customers. Have more enquiries? Contact our customer support to let us know of your problems and we will find a solution.</p>
                </div>
                <div className="container flex flex-col align-middle justify-center md:grid md:grid-rows-2 md:grid-cols-3 md:gap-8 my-10">
                    {
                        faqCards.map(({title, desc, imgSrc}) => (
                            <FaqCard key={v4()} title={title} desc={desc} imgSrc={imgSrc} />
                        ))
                    }
                </div>
            </div>
        </Fragment>
    )
}