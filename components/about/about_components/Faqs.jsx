import { Fragment } from 'react'
import { faqCards } from '../../../data/iterators'

function FaqCard ({title, desc}) {
    return (
        <Fragment>
            <div className="container flex flex-col align-middle justify-center p-5">
                <h1 className="mb-2 text-lg font-semibold">{title}</h1>
                <p className="text-base text-slate-400 font-normal">{desc}</p>
            </div>
        </Fragment>
    )
}

export default function Faqs () {
    return (
        <Fragment>
            <div className="container flex flex-col align-middle justify-center min-w-full bg-slate-50 shadow-lg p-20 my-5">
                <div className="container flex flex-col align-middle justify-start ml-5 my-5">
                    <h1 className="text-slate-800 text-left text-2xl font-bold my-2">Frequently asked questions</h1>
                    <p className="text-slate-500 text-left text-base font-normal w-[550px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed commodi animi temporibus dolores nihil pariatur maxime repellat cupiditate fuga. Numquam neque deleniti eveniet expedita aliquid.</p>
                </div>
                <div className="container grid grid-rows-2 grid-cols-3 gap-8 my-10">
                    {
                        faqCards.map(({title, desc}) => (
                            <FaqCard key={title} title={title} desc={desc} />
                        ))
                    }
                </div>
            </div>
        </Fragment>
    )
}