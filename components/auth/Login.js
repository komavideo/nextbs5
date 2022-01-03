import React from "react";
import Image from "next/image";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Login = () => {
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
                                <Form.Control type="email" placeholder="Enter username" className="p-2" />
                                <Form.Text className="text-muted">
                                    输入您的用户名(ID)
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label className="text-secondary ms-1">口令</Form.Label>
                                <Form.Control type="password" placeholder="Password" className="p-2" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="同意协议" />
                            </Form.Group>
                            <div className="d-flex justify-content-center py-3">
                                <Button variant="primary" className="btn btn-success btn-lg shadow-sm" style={{ width: '200px' }}>
                                    登录
                                </Button>
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
