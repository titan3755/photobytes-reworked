import { Fragment, useState } from 'react'
import { Modal, Text, Input, Row, Checkbox, Button } from '@nextui-org/react'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import LoginError from './authentication_components/LoginError'
import { parse } from 'node-html-parser'

export default function Login ({visible, setVisible, successCallback}) {
    const [loginError, setLoginError] = useState('')
    const [inputValues, setInputValues] = useState({
        username: '',
        password: ''
    })
    const router = useRouter()
    function closeHandler () {
        setVisible(false)
    }
    async function submitHandler () {
        try {
            if (!inputValues.username) {
                throw new Error('Username is required to login')
            }
            if (!inputValues.password) {
                throw new Error('Password is required to login')
            }
            let { username, password } = inputValues
            let csrfToken = await (await axios.get('/api/auth/csrf')).data.csrfToken
            let login = await (await axios.post('/api/auth/callback/credentials', {
                username: username,
                password: password,
                csrfToken: csrfToken
            })).data
            try {
                let error = parse(login).querySelector('.error').childNodes[0].childNodes[0].rawText
                setLoginError(error)
            }
            catch (err) {
                setVisible(false)
                setInputValues({username: '', password: ''})
                setLoginError('')
                localStorage.setItem('firstLogin', true)
                successCallback()
            }
        }
        catch (err) {
            setLoginError(err.message)
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
                            Login to existing <b className="text-xl text-blue-500 font-semibold">PhotoBytes Account</b> 
                        </Text>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <LoginError error={loginError} enabled={loginError ? 'flex' : 'none'}  />
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
                            type="password"
                            name="password"
                            placeholder="Password"
                            required="true"
                            value={inputValues.password}
                            onChange={(e) => setInputValues({...inputValues, password: e.target.value})}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button auto flat color="primary" onClick={closeHandler}>
                            Close
                        </Button>
                        <Button auto color="primary" onClick={submitHandler}>
                            Login
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </Fragment>
    )
}