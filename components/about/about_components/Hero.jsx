import { Fragment } from 'react'

export default function Hero () {
    return (
        <Fragment>
            <div className="container min-w-full flex flex-col align-middle justify-center">
                <img src="https://images.unsplash.com/photo-1527067829737-402993088e6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3840&q=80" className="min-w-full object-cover brightness-[35%] saturate-125 h-[450px] md:h-[600px]"  alt="" />
                <div className="container top-50 left-50 absolute top-50 left-50 flex flex-col min-w-full align-middle justify-center p-10">
                    <h1 className="text-4xl md:text-5xl text-rose-500 font-bold md:font-extrabold font-sans mx-auto text-center mb-6">About PhotoBytes Studios</h1>
                    <p className="text-base text-slate-200 font-medium font-sans mx-auto text-center w-auto md:w-[620px] mb-6">PhotoBytes Studios is an online service based in Bangladesh which provides customers with digital works such as GFX Design, Art & Illustration, Motion GFX, Web Design as well as writing services</p>
                </div>
            </div>
        </Fragment>
    )
}