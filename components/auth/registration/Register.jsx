import { Modal, Text, Input, Row, Checkbox, Button } from '@nextui-org/react'
import { Fragment, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import RegistrationError from './registration_components/RegisterError'
import validator from 'email-validator'
import { toast } from 'react-toastify'

export default function Register ({visible, setVisible}) {
    const [registerDisabled, setRegisterDisabled] = useState(false)
    const [registrationError, setRegistrationError] = useState('')
    const [inputValues, setInputValues] = useState({
        username: '',
        password: '',
        email: ''
    })
    const router = useRouter()
    function closeHandler () {
        setVisible(false)
    }
    async function submitHandler () {
        try {
            if (inputValues.username.length < 6) {
                throw new Error('Username must be at least 6 characters long')
            }
            if (validator.validate(inputValues.email) === false) {
                throw new Error('Email is not in a correct format')
            }
            if (inputValues.password.length < 6) {
                throw new Error('Password must be at least 6 characters long')
            }
            let {username, password, email} = inputValues
            let response = await (await axios.post('/api/register', {
                username: username,
                password: password,
                email: email,
            })).data
            if (response.success) {
                setVisible(false)
                setInputValues({username: '', password: '', email: ''})
                setRegistrationError('')
                toast.success('Registration successful!')
                toast('Login to your account by clicking the login button')
            }
            else {
                setRegistrationError(response.message)
            }
        }
        catch (err) {
            if (err.message === 'Request failed with status code 406') {
                setRegistrationError('Username is already taken')
            }
            else {
                setRegistrationError(err.message)
            }
        }
    }
    return (
        <Fragment>
            <div>
                <Modal
                    closeButton
                    blur
                    aria-labelledby="modal-title"
                    open={visible}
                    onClose={closeHandler}
                >
                    <Modal.Header>
                        <Text id="modal-title" size={18}>
                            Register for <b className="text-xl text-rose-500 font-semibold">PhotoBytes Account</b> 
                        </Text>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <RegistrationError error={registrationError} enabled={registrationError ? 'flex' : 'none'}  />
                        </Row>
                        <Input
                            clearable
                            bordered
                            fullWidth
                            color="primary"
                            size="lg"
                            type="text"
                            name="username"
                            placeholder="Username"
                            required="true"
                            value={inputValues.username}
                            onChange={(e) => setInputValues({...inputValues, username: e.target.value})}
                        />
                        <Input
                            clearable
                            bordered
                            fullWidth
                            color="primary"
                            size="lg"
                            type="email"
                            name="email"
                            placeholder="Email"
                            required="true"
                            value={inputValues.email}
                            onChange={(e) => setInputValues({...inputValues, email: e.target.value})}
                        />
                        <Input
                            clearable
                            bordered
                            fullWidth
                            color="primary"
                            size="lg"
                            type="password"
                            name="password"
                            placeholder="Password"
                            required="true"
                            value={inputValues.password}
                            onChange={(e) => setInputValues({...inputValues, password: e.target.value})}
                        />
                        <Row justify="space-between">
                        <Checkbox color="error" checked={registerDisabled} onChange={() => {setRegisterDisabled(prev => !prev)}}>
                            <Text size={14}>
                            I agree to the <Link href="/privacy" passHref={true}><span className="text-rose-600">Terms of Service</span></Link>
                            </Text>
                        </Checkbox>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button auto flat color="error" onClick={closeHandler}>
                            Close
                        </Button>
                        <Button auto color="error" onClick={submitHandler} disabled={!registerDisabled}>
                            Register
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </Fragment>
    )
}