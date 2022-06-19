import { Fragment, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'

export default function Form () {
    const [inputValues, setInputValues] = useState({
        fn: '',
        ln: '',
        email: '',
        cl: '',
        body: ''
    })
    async function contactFormSubmissionHandler (e) {
        e.preventDefault()
        try {
            let {fn, ln, email, cl, body} = e.target
            let response = await (await axios.post('/api/contact', {
                fn: fn.value,
                ln: ln.value,
                email: email.value,
                cl: cl.value,
                body: body.value
            })).data
            if (response.success) {
                setInputValues({fn: '', ln: '', email: '', cl: '', body: ''})
                toast.success('Message sent! We will get back to you shortly.')
            }
        }
        catch (err) {
            toast.error('Something went wrong. Please try again later.')
        }
    }
    return (
        <Fragment>
            <form onSubmit={contactFormSubmissionHandler}>
                <div className="container flex flex-col-reverse lg:flex-row align-middle justify-center p-5 min-w-full h-[1000px] my-5">
                    <div className="container flex flex-col align-middle justify-center w-full mx-auto lg:mx-0 lg:w-[50%] h-full p-5 md:p-10 lg:p-16">
                        <h1 className="text-4xl font-extrabold font-sans text-center mb-4">Contact Form</h1>
                        <p className="text-base font-normal font-sans text-center text-slate-400">If you got any enquiries, contact us via the form below and we will reach out to you swiftly.</p>
                        <div className="container flex flex-col md:flex-row gap-5 justify-center align-middle my-2 mt-7">
                            <input type="text" value={inputValues.fn} onChange={(e) => {setInputValues({...inputValues, fn: e.target.value})}} className="md:w-[50%] w-full rounded-md p-2 pl-5 pr-5 border-[1px] border-slate-500 bg-white font-sans text-base font-medium focus:outline-2 focus:outline-rose-500" placeholder="First Name" name="fn" required />
                            <input type="text" value={inputValues.ln} onChange={(e) => {setInputValues({...inputValues, ln: e.target.value})}}  className="md:w-[50%] w-full rounded-md p-2 pl-5 pr-5 border-[1px] border-slate-500 bg-white font-sans text-base font-medium focus:outline-2 focus:outline-rose-500" placeholder="Last Name" name="ln" required />
                        </div>
                        <input type="email" value={inputValues.email} onChange={(e) => {setInputValues({...inputValues, email: e.target.value})}}  className="my-2 rounded-md p-2 pl-5 pr-5 border-[1px] border-slate-500 bg-white font-sans text-base font-medium focus:outline-2 focus:outline-rose-500" placeholder="Email Address" name="email" required />
                        <input type="text" value={inputValues.cl} onChange={(e) => {setInputValues({...inputValues, cl: e.target.value})}}  className="my-2 rounded-md p-2 pl-5 pr-5 border-[1px] border-slate-500 bg-white font-sans text-base font-medium focus:outline-2 focus:outline-rose-500" placeholder="Contact Links" name="cl" />
                        <textarea name="body" value={inputValues.body} onChange={(e) => {setInputValues({...inputValues, body: e.target.value})}} placeholder="Message Body" className="my-2 rounded-md p-2 pl-5 pr-5 border-[1px] border-slate-500 bg-white font-sans text-base font-medium focus:outline-2 focus:outline-rose-500" cols="30" rows="10" required></textarea>
                        <button type="submit" className="bg-rose-500 p-4 text-center text-white text-xl font-bold rounded-lg hover:bg-rose-600 my-4 w-[300px] md:w-[450px] lg:w-[300px] xl:w-[500px] mx-auto">Submit</button>
                    </div>
                    <div className="container lg:flex lg:flex-row lg:align-middle lg:justify-center w-full hidden lg:w-[50%] h-full p-16">
                        <img src="https://images.unsplash.com/photo-1528372444006-1bfc81acab02?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="" />
                    </div>
                </div>
            </form>
        </Fragment>
    )
}