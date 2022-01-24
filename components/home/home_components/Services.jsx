import { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { serviceCards } from '../../../data/iterators'

function ServiceCard ({title, desc, icon, color}) {
    return (
        <Fragment>
            <div className="container flex flex-col align-middle justify-center p-5 shadow-lg hover:shadow-2xl transition delay-100">
                <FontAwesomeIcon className="my-6 text-center text-5xl mx-auto" style={{color: color}} icon={icon} />
                <h1 className="text-black text-center uppercase font-sans font-medium text-2xl mb-3">{title}</h1>
                <p className="text-sm text-center font-sans text-neutral-700 mb-3 w-[70%] mx-auto">{desc}</p>
            </div>
        </Fragment>
    )
}

export default function ServicesSection () {
    return (
        <Fragment>
            <div className="container flex flex-col align-middle justify-center mx-auto mt-20 mb-2">
                <h2 className="text-black text-center text-4xl font-normal font-serif mb-1 mx-auto">Our Services</h2>
                <hr className="bg-slate-800 h-[2px] w-28 mx-auto mb-5" />
                <p className="text-slate-600 text-lg font-normal font-sans text-center w-[70%] mx-auto mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, quasi. Lorem ipsum dolor sit amet consectetur consectetur adipisicing elit. Mollitia, fugit.</p>
                <div className="container p-5 grid grid-rows-2 grid-cols-2 gap-4 mx-auto w-[60%]">
                    {
                        serviceCards.map(card => <ServiceCard key={card.title} {...card} />)
                    }
                </div>
            </div>
        </Fragment>
    )
}