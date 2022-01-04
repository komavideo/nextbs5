import React, { useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from 'next/router'

import { Container, Row, Col, Form, Button } from "react-bootstrap";

import { signIn } from 'next-auth/react'
import ButtonLoader from "../widgets/ButtonLoader";
import Link from "next/link";

const Login = () => {
    const router = useRouter()
    const [message, setMessage] = useState('')
    const [loginning, setLoginning] = useState(false)
    const refUID = useRef();
    const refPWD = useRef();
    const refAgreement = useRef();

    const btnLogin_click = async () => {
        setMessage('')
        setLoginning(true)
        const result = await signIn("credentials", {
            redirect: false,
            uid: refUID.current.value,
            pwd: refPWD.current.value,
        })
        console.log(result)

        if (result.error) {
            setMessage(result.error)
            setLoginning(false)
        } else {
            router.push('/')
        }

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
                                src="/lock.png"
                                layout="fixed"
                                width={48}
                                height={48}
                            />
                        </div>
                        <div className="d-flex justify-content-center py-3">
                            <h3 className="text-secondary">用户登录</h3>
                        </div>
                        <Form>
                            <Form.Group className="mb-3" controlId="formUsername">
                                <Form.Label className="text-secondary ms-1">用户名(ID)</Form.Label>
                                <Form.Control type="text" placeholder="Enter username" className="p-2" ref={refUID} />
                                <Form.Text className="text-muted">
                                    输入您的用户名(ID)
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label className="text-secondary ms-1">口令</Form.Label>
                                <Form.Control type="password" placeholder="Password" className="p-2" ref={refPWD} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Cookie 使用" className="text-secondary ms-1" ref={refAgreement} />
                            </Form.Group>
                            <div className="text-danger">
                                {message && (
                                    <ul>
                                        <li>{message}</li>
                                    </ul>
                                )}
                            </div>
                            <div className="d-flex justify-content-center py-3">
                                <Button disabled={loginning} variant="primary" className="btn btn-success btn-lg shadow-sm" style={{ width: '200px' }} onClick={btnLogin_click}>
                                    {loginning ? <ButtonLoader /> : "登录"}
                                </Button>
                            </div>
                            <div className="d-flex justify-content-end">
                                <Link href="/auth/register">
                                    <a className="link-primary">用户注册</a>
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

export default Login;
