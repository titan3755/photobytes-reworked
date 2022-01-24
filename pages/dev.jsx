import { Fragment, useState } from 'react'
import RegisterModal from '../components/modals/Register'

export default function DevPage () {
    let [modalOpen, setModalOpen] = useState(false)
    return (
        <Fragment>
            <RegisterModal modalToggle={modalOpen} setModalToggle={setModalOpen} />
            <button onClick={() => {setModalOpen(true)}}>clikk</button>
        </Fragment>
    )
}