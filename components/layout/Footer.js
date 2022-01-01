import React from "react";
import { Container, Navbar } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="mt-3">
            <Navbar fixed="bottom" variant="dark" bg="dark">
                <Container className="justify-content-center">
                    <Navbar.Text className="my-1">
                        2021-2022, All Rights Reserved
                    </Navbar.Text>
                </Container>
            </Navbar>
        </div>
    )
}

export default Footer;
