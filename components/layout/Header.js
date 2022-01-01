import React from "react";
import Link from "next/link";

import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
    return (
        <React.Fragment>
            <Navbar bg="light" className='px-3 py-2 shadow-sm'>
                <Link href="/">
                    <Navbar.Brand style={{ cursor: 'pointer' }}>
                        <div className="link">
                            <img
                                alt=""
                                src="/logo.svg"
                                width="30"
                                height="30"
                                className="d-inline-block align-top me-2" />
                            <span className="text-secondary">Next.js + Bootstrap5</span>
                        </div>
                    </Navbar.Brand>
                </Link>
                <Nav className="ms-auto text-secondary">
                    <Link href="/">
                        <a className="p-2 nav-link">
                            Home
                        </a>
                    </Link>
                    <Link href="/dlc">
                        <a className="p-2 nav-link">
                            DLC
                        </a>
                    </Link>
                </Nav>
            </Navbar>
        </React.Fragment>
    )
}

export default Header;
