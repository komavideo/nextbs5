import Head from 'next/head'
import { Navbar } from 'react-bootstrap'

import News from '../components/News'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Next.js + Bootstrap5</title>
                <meta name="description" content="The most popular front-end framework Rebuilt for React." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar bg="light" variant="light" className='p-3'>
                <h2>Next.js + Bootstrap5</h2>
            </Navbar>
            <main className='m-3'>
                <News />
            </main>
        </div>
    )
}
