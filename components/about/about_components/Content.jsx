import { Fragment } from 'react'

function ContentCard ({title, description}) {
    return (
        <Fragment>
            <div className="container rounded-lg flex flex-col align-bottom justify-center bg-gradient-to-r p-10 from-violet-500 to-pink-400">
                <div className="container">

                </div>
                <h1>{title}</h1>
                <p>{description}</p>
                <div className="container">

                </div>
            </div>
        </Fragment>
    )
}

export default function Content () {
    return (
        <Fragment>
            <div className="container p-10 flex flex-row align-middle justify-center gap-10 my-10 min-w-full">
                <div className="container flex flex-col align-middle justify-center w-[50%]">
                    <ContentCard />
                </div>
                <div className="container flex flex-col align-middle justify-center w-[50%]">
                    <h1>Lorem ipsum dolor sit amet.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus pariatur, eius at necessitatibus sed harum qui blanditiis molestias ipsa recusandae, nemo minima ipsam quidem facere exercitationem ducimus impedit atque alias!</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum incidunt possimus maiores harum, quisquam, id, hic alias animi nihil eaque assumenda consequatur nobis ullam dolores itaque expedita sequi perspiciatis repudiandae voluptate modi beatae voluptatum? Consequatur.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, itaque. Nulla eos enim impedit iusto itaque consequatur modi? Assumenda in illo aspernatur ad nemo hic quae voluptatem dolore, explicabo officiis provident similique iste, magni sint.</p>
                    <div className="container grid grid-rows-2 grid-cols-2 gap-5">

                    </div>
                </div>
            </div>
        </Fragment>
    )
}