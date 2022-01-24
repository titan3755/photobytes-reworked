import { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { featureCards } from '../../../data/iterators'

function FeatureCard ({title, desc, icon, color, imgUrl}) {
    return (
        <Fragment>
            <div className="container flex w-[1000px] rounded-lg flex-col align-middle justify-center shadow-xl hover:shadow-2xl transition delay-100">
                <div className="container mb-3">
                    <img src={imgUrl} alt="" className="min-w-full object-cover h-[200px] rounded-t-lg" />
                </div>
                <div className="container p-5">
                    <h1 className="text-center text-slate-800 text-lg font-bold mb-3">{title}</h1>
                    <p className="mb-3 text-slate-500 text-sm font-medium text-center">{desc}</p>
                </div>
            </div>
        </Fragment>
    )
}

export default function FeaturesSection () {
    return (
        <Fragment>
            <div className="container flex flex-row min-w-full p-10 bg-slate-100 gap-5">
                <div className="container flex flex-col align-middle justify-center ml-20 p-12">
                    <p className="text-sm text-slate-500 mb-2">Achieve More</p>
                    <h1 className="font-extrabold text-3xl font-sans w-[350px] text-slate-800">Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
                </div>
                {
                    featureCards.map(card => <FeatureCard key={card.title} {...card} />)
                }
            </div>
        </Fragment>
    )
}