import { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { featureCards } from '../../../data/iterators'

function FeatureCard ({title, desc, icon, color, imgUrl}) {
    return (
        <Fragment>
            <div className="container mx-auto flex sm:w-[500px] lg:w-[1000px] rounded-lg flex-col align-middle justify-center shadow-xl hover:shadow-2xl transition delay-100">
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
            <div className="container flex flex-col justify-center align-middle min-w-full p-10 bg-slate-100 gap-5 xl:flex-row">
                <div className="container flex flex-col align-middle min-w-full lg:min-w-min justify-center xl:ml-20 xl:p-12">
                    <p className="text-sm text-center xl:text-left mx-auto xl:mx-0 text-slate-500 mb-2">Achieve More</p>
                    <h1 className="font-extrabold text-2xl text-center xl:text-left xl:mx-0 xl:w-[80%] sm:text-4xl font-sans w-[50%] mx-auto mb-4 text-slate-800">We provide you the best product</h1>
                </div>
                <div className="container flex flex-col min-w-full lg:min-w-[60%] lg:flex-row gap-5">
                    {
                        featureCards.map(card => <FeatureCard key={card.title} {...card} />)
                    }
                </div>
            </div>
        </Fragment>
    )
}