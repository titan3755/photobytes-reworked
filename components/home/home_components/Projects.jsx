// import { Fragment } from 'react'
// import { projectCards } from '../../../data/iterators'

// function Card({imgUrl, titleText, descText}) {
//     return (
//         <Fragment>
//             <div className="h-full my-10 relative">
//                 <img className="h-full w-full object-cover hover:hue-rotate-60" src={imgUrl} alt="" srcset="" />
//                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
//                     <h3>
//                         {titleText}
//                     </h3>
//                     <p>
//                         {descText}
//                     </p>
//                 </div>
//             </div>
//         </Fragment>
//     )
// }

// export default function Projects () {
//     return (
//         <Fragment>
//             <div className="flex flex-col align-middle justify-center w-full p-10 my-7">
//                 <div className="flex flex-col align-middle justify-center">
//                     <h2 className="text-black text-center text-4xl font-normal font-serif mb-1 mx-auto">Our projects</h2>
//                     <p className="text-gray-500 text-center mx-auto font-normal text-md mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//                 </div>
//                 <div className="flex flex-row align-middle justify-center gap-5">
//                     {
//                         projectCards.map(card => {
//                             return (
//                                 <Card key={card.title} {...card}/>
//                             )
//                         })
//                     }
//                 </div>
//             </div>
//         </Fragment>
//     )
// }