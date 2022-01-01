import React from "react";
import Head from 'next/head';

import Footer from "./Footer";
import Header from "./Header";

const MainLayout = ({ children, title = 'Next.js + Bootstrap5' }) => {
    return (
        <React.Fragment>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="The most popular front-end framework Rebuilt for React." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <main className="pb-5">
                {children}
            </main>

            <Footer />
        </React.Fragment >
    )
}

export default MainLayout;
