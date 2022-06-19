import { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

export default function RegistrationError ({error, enabled}) {
    return (
        <Fragment>
            <div className="container flex flex-row align-middle justify-center w-full bg-red-200 shadow-lg p-3 my-2 rounded-lg" style={{display: enabled}}>
                <FontAwesomeIcon icon={faExclamationTriangle} className="mx-1 mr-3 text-2xl text-center text-red-500" />
                <div className="container flex flex-col align-middle justify-start">
                    <p className="text-red-500 text-left text-sm font-normal">{error}</p>
                </div>
            </div>
        </Fragment>
    )
}