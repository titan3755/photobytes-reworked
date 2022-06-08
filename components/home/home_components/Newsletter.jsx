import { Fragment, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

export default function Newsletter () {
    const [emailIn, setEmailIn] = useState('')
    async function handleSubmission (e) {
        e.preventDefault()
        try {
            let response = await (await axios.post('/api/newsletter/subscribe', {
                email: emailIn
            })).data
            if (response.success) {
                setEmailIn('')
                toast.success('You have been subscribed to the newsletter!')
            }
            else {
                toast.error('There was an error subscribing you to the newsletter')
            }
        }
        catch (err) {
            console.log(err.message)
            if (err.message === 'Request failed with status code 406') {
                setEmailIn('')
                toast.error('You are already subscribed to the newsletter')
            }
            else {
                toast.error('There was an error subscribing you to the newsletter')
            }
        }
    }
    return (
        <Fragment>
            <form onSubmit={handleSubmission}>
                <div className="container h-[600px] flex flex-col align-middle justify-center min-w-full p-10 bg-slate-100">
                    <h1 className="text-center mx-auto text-5xl mb-3 md:mb-2 md:text-[55px] font-bold md:font-extrabold font-sans mt-10 lg:w-[800px]">Subscribe to our newsletter!</h1>
                    <p className="text-center mx-auto text-base md:text-lg font-normal md:font-medium text-slate-500 my-2 lg:w-[700px]">Want to receive daily emails regarding news of our products? You can subscribe to our newsletter with just one click! Unsubcription is possible at anytime.</p>
                    <div className="container align-middle justify-center mx-auto flex flex-row mt-6 mb-16">
                        <input type="email" value={emailIn} onChange={(e) => {setEmailIn(e.target.value)}} className="w-[300px] border-2 text-black border-black bg-white p-2 pl-4 pr-4 rounded-l-md" placeholder="Your email address" required />
                        <button className="p-2 w-[80px] rounded-r-md bg-black text-white font-medium" type="submit">Submit</button>
                    </div>
                </div>
            </form>
        </Fragment>
    )
}