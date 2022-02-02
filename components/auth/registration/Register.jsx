import { Modal, Text, Input, Row, Checkbox, Button } from '@nextui-org/react';
import { Fragment, useState } from 'react'

export default function Register ({visible, setVisible}) {
    const closeHandler = () => {
        setVisible(false)
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
                            Welcome to PhotoBytes Studios
                        </Text>
                    </Modal.Header>
                    <Modal.Body>
                        <Input
                            clearable
                            bordered
                            fullWidth
                            color="primary"
                            size="lg"
                            placeholder="Email"
                        />
                        <Input
                            clearable
                            bordered
                            fullWidth
                            color="primary"
                            size="lg"
                            placeholder="Password"
                        />
                        <Row justify="space-between">
                        <Checkbox>
                            <Text size={14}>
                            Remember me
                            </Text>
                        </Checkbox>
                        <Text size={14}>
                            Forgot password?
                        </Text>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button auto flat color="error" onClick={closeHandler}>
                        Close
                        </Button>
                        <Button auto onClick={closeHandler}>
                        Sign in
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </Fragment>
    )
}