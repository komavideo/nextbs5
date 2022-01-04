import React from "react";
import Link from "next/link";

import { Navbar, Nav } from 'react-bootstrap';
import AuthHeader from "../auth/AuthHeader";

const Header = () => {
    return (
        <React.Fragment>
            {/* expand: {'sm' | 'md' | 'lg' | 'xl' | 'xxl'} */}
            <Navbar bg="light" expand="md" className='px-3 py-2 shadow-sm'>
                <Navbar.Brand style={{ cursor: 'pointer' }}>
                    <Link href="/">
                        <div className="link">
                            <img
                                alt=""
                                src="/logo.svg"
                                width="30"
                                height="30"
                                className="d-inline-block align-top me-2" />
                            <span className="text-secondary">Next.js + Bootstrap5</span>
                        </div>
                    </Link>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto text-secondary">
                        <Link href="/dlc">
                            <a className="p-2 nav-link">
                                DLC
                            </a>
                        </Link>
                        <Link href="/rapi">
                            <a className="p-2 nav-link">
                                RAPI
                            </a>
                        </Link>
                        <AuthHeader />
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </React.Fragment>
    )
}

export default Header;
