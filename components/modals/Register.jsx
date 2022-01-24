import { Fragment } from 'react'
import { Dialog } from '@headlessui/react'

export default function RegisterModal ({modalToggle, setModalToggle}) {
    return (
        <Fragment>
            <Dialog open={modalToggle} onClose={() => {setModalToggle(false)}}>
                <Dialog.Overlay />
                <Dialog.Title>Deactivate account</Dialog.Title>
                <Dialog.Description>
                    This will permanently deactivate your account
                </Dialog.Description>

                <p>
                    Are you sure you want to deactivate your account? All of your data will
                    be permanently removed. This action cannot be undone.
                </p>

                <button onClick={() => setModalToggle(false)}>Deactivate</button>
                <button onClick={() => setModalToggle(false)}>Cancel</button>
            </Dialog>
        </Fragment>
    )
}