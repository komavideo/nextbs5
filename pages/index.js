import Head from 'next/head'

import { Button } from 'react-bootstrap'

const colorList = [
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
]

export default function Home() {
    const btn_click = (variant) => {
        alert(`您按下了 ${variant} 颜色的按钮。`)
    }
    return (
        <div>
            <Head>
                <title>React+Bootstrap5</title>
                <meta name="description" content="The most popular front-end framework
Rebuilt for React." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className='m-3'>
                <h1>React+Bootstrap5</h1>
                <div>
                    <h2>按钮</h2>
                    {
                        colorList.map((variant, idx) => (
                            <Button key={idx} variant={variant} className='m-1' onClick={() => btn_click(variant)}>{idx}.{variant}</Button>
                        ))
                    }
                </div>
            </main>
        </div>
    )
}
