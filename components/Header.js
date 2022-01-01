import React from "react";
import Head from 'next/head';

import { Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <React.Fragment>
            <Head>
                <title>Next.js + Bootstrap5</title>
                <meta name="description" content="The most popular front-end framework Rebuilt for React." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar bg="light" variant="light" className='px-3 py-2 shadow-sm'>
                <Navbar.Brand href="#home"><img
                    alt=""
                    src="/logo.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top me-2"
                />
                    <span className="text-secondary">Next.js + Bootstrap5</span>
                </Navbar.Brand>
            </Navbar>
        </React.Fragment>
    )
}

export default Header;
