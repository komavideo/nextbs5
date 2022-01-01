import Head from 'next/head'

import { Button, Badge, DropdownButton, ButtonGroup, Dropdown, ProgressBar, Spinner, Form } from 'react-bootstrap'

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

const DLC = () => {
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
                <div>
                    <h2>标签</h2>
                    {
                        colorList.map((variant, idx) => (
                            <Badge bg={variant} className='m-1'>{variant}</Badge>
                        ))
                    }
                </div>
                <div>
                    <h2>下拉框</h2>
                    {
                        colorList.map((variant, idx) => (
                            <DropdownButton
                                as={ButtonGroup}
                                key={variant}
                                id={`dropdown-variants-${variant}`}
                                variant={variant.toLowerCase()}
                                title={variant}
                                className='m-1'
                            >
                                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                <Dropdown.Item eventKey="3" active>
                                    Active Item
                                </Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                            </DropdownButton>
                        ))
                    }
                </div>
                <div>
                    <h2>进度条</h2>
                    {
                        colorList.map((variant, idx) => (
                            <ProgressBar striped animated variant={variant} now={Math.floor(Math.random() * 100)} className='m-1' />
                        ))
                    }
                </div>
                <div>
                    <h2>装载中</h2>
                    {
                        colorList.map((variant, idx) => (
                            <Spinner animation="border" variant={variant} className='m-1' />
                        ))
                    }
                </div>
                <div>
                    <h2>输入区</h2>
                    <Form className='card p-3'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>请输入邮件地址：</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>请输入口令:</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" onClick={() => alert('提交表单啦！')}>
                            确定
                        </Button>
                    </Form>
                </div>
            </main>
        </div>
    )
}

export default DLC;