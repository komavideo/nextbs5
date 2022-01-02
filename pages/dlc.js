import MainLayout from '../components/layout/MainLayout'

import { Button, Badge, DropdownButton, ButtonGroup, Dropdown, ProgressBar, Spinner, Form } from 'react-bootstrap'
import Counter from '../components/Counter'

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
        <MainLayout title='React + Bootstrap5 组件演示'>
            <section className='m-3'>
                <Counter />
                <h3 className="text-secondary">React+Bootstrap5</h3>
                <hr />
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
                            <Badge key={idx} bg={variant} className='m-1'>{variant}</Badge>
                        ))
                    }
                </div>
                <div>
                    <h2>下拉框</h2>
                    {
                        colorList.map((variant, idx) => (
                            <DropdownButton
                                as={ButtonGroup}
                                key={idx}
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
                            <ProgressBar key={idx} striped animated variant={variant} now={Math.floor(Math.random() * 99) + 1} className='m-1' />
                        ))
                    }
                </div>
                <div>
                    <h2>装载中</h2>
                    {
                        colorList.map((variant, idx) => (
                            <Spinner key={idx} animation="border" variant={variant} className='m-1' />
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
            </section>
        </MainLayout>
    )
}

export default DLC;
