import { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook } from '@fortawesome/free-solid-svg-icons'

function ContentCard ({title, description, imgUrl}) {
    return (
        <Fragment>
            <div className="container flex flex-col align-middle shadow-2xl mx-auto justify-start w-[500px]">
                <img src={imgUrl} className="w-full h-[300px] object-cover rounded-t-lg" alt="" />
                <div className="container rounded-b-lg flex flex-col align-bottom justify-center p-10">
                    <div className="container flex flex-row align-middle justify-start mb-5">
                        <FontAwesomeIcon icon={faAddressBook} style={{color: 'black', fontSize: '32px'}} />
                        <p className="text-2xl font-bold text-black mx-4">{title}</p>
                    </div>
                    <p className="text-left font-medium text-base text-slate-600">{description}</p>
                    <p className="text-sm text-slate-400 font-normal mt-3">Adipisicing elit. Ad, provident.</p>
                </div>
            </div>
        </Fragment>
    )
}

export default function Content () {
    return (
        <Fragment>
            <div className="container p-10 flex flex-row align-middle justify-center my-10 min-w-full">
                <div className="container flex flex-col align-middle justify-center p-5 w-[50%]">
                    <ContentCard title="PhotoBytes Studios" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pellentesque diam magna, vel sollicitu" imgUrl="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                </div>
                <div className="container flex flex-col align-middle justify-center p-5 w-[50%]">
                    <div className="container w-[500px]">
                        <h1 className="font-extrabold text-4xl mb-5">Lorem ipsum dolor sit amet</h1>
                        <p className="font-medium text-base text-slate-500 mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus pariatur, eius at necessitatibus sed harum qui blanditiis molestias ipsa recusandae, nemo minima ipsam quidem facere exercitationem ducimus impedit atque alias!</p>
                        <p className="font-medium text-base text-slate-500 mb-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum incidunt possimus maiores harum, quisquam, id, hic alias animi nihil eaque assumenda consequatur nobis ullam dolores itaque expedita sequi perspiciatis repudiandae voluptate modi beatae voluptatum? Consequatur.</p>
                        <p className="font-medium text-base text-slate-500 mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, itaque. Nulla eos enim impedit iusto itaque consequatur modi? Assumenda in illo aspernatur ad nemo hic quae voluptatem dolore, explicabo officiis provident similique iste, magni sint.</p>
                        <div className="container grid grid-rows-2 grid-cols-2 gap-5">

                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}