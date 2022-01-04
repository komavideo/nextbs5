import React, { useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from 'next/router'
import Link from "next/link";

import { Container, Row, Col, Form, Button, FloatingLabel } from "react-bootstrap";
import ButtonLoader from "../widgets/ButtonLoader";

const headers = {
    'Content-Type': 'application/json',
}

const Register = () => {
    const router = useRouter()
    const [message, setMessage] = useState('')
    const [loginning, setLoginning] = useState(false)

    const refUID = useRef();
    const refPWD1 = useRef();
    const refPWD2 = useRef();
    const refDisplayName = useRef();

    const btnRegister_click = async () => {
        setMessage('')
        setLoginning(true)

        const uid = refUID.current.value
        const pwd1 = refPWD1.current.value
        const pwd2 = refPWD2.current.value
        const displayName = refDisplayName.current.value

        const res = await fetch('/api/users', {
            method: 'POST',
            headers,
            body: JSON.stringify({
                uid,
                pwd1,
                pwd2,
                displayName,
            })
        })
        const data = await res.json();

        setLoginning(false)
        if (data.error) {
            setMessage(data.error.message)
        }
        console.log(data)
    }
    return (
        <React.Fragment>
            <Container>
                <Row className="justify-content-center">
                    <Col xs="0" lg="3">
                    </Col>
                    <Col xs lg="6" className="card bg-white p-3 mt-3 shadow">
                        <div className="d-flex justify-content-center">
                            <Image
                                src="/add_user.png"
                                layout="fixed"
                                width={48}
                                height={48}
                            />
                        </div>
                        <div className="d-flex justify-content-center py-3">
                            <h3 className="text-secondary">用户注册</h3>
                        </div>

                        <Form>
                            <Form.Group className="mb-3" controlId="formUsername">
                                <Form.Label className="text-secondary ms-1">用户名(ID)</Form.Label>
                                <FloatingLabel
                                    controlId="formUsername"
                                    label="username"
                                    className="text-secondary"
                                >
                                    <Form.Control type="text" placeholder="Enter username" ref={refUID} />
                                </FloatingLabel>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formPassword1">
                                <Form.Label className="text-secondary ms-1">登录口令</Form.Label>
                                <FloatingLabel controlId="formPassword1" label="Password" className="text-secondary">
                                    <Form.Control type="password" placeholder="Password" ref={refPWD1} />
                                </FloatingLabel>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formPassword2">
                                <Form.Label className="text-secondary ms-1">登录口令(确认)</Form.Label>
                                <FloatingLabel controlId="formPassword2" label="Password" className="text-secondary">
                                    <Form.Control type="password" placeholder="Password" ref={refPWD2} />
                                </FloatingLabel>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formDisplayname">
                                <Form.Label className="text-secondary ms-1">显示名</Form.Label>
                                <FloatingLabel
                                    controlId="formDisplayname"
                                    label="Display Name"
                                    className="text-secondary"
                                >
                                    <Form.Control type="text" placeholder="Enter display name" ref={refDisplayName} />
                                </FloatingLabel>
                            </Form.Group>
                            <div className="text-danger">
                                {message && (
                                    <ul>
                                        <li>{message}</li>
                                    </ul>
                                )}
                            </div>
                            <div className="d-flex justify-content-center py-3">
                                <Button disabled={loginning} variant="primary" className="btn btn-success btn-lg shadow-sm" style={{ width: '200px' }} onClick={btnRegister_click}>
                                    {loginning ? <ButtonLoader /> : "注 册"}
                                </Button>
                            </div>
                            <div className="d-flex justify-content-start">
                                <Link href="/auth/login">
                                    <a className="link-primary">用户登录</a>
                                </Link>
                            </div>
                        </Form>
                    </Col>
                    <Col xs="0" lg="3">
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default Register;
