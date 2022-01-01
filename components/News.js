import { React, useState } from "react";
import { Button } from 'react-bootstrap'

const News = () => {
    const [message, setMessage] = useState('')

    const btn_listNews_click = async (pageNumber) => {
        const res = await fetch('/api/news?p=' + pageNumber, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const data = await res.json();
        setMessage(JSON.stringify(data, {}, 4))
    }

    const btn_getNews_click = async (id) => {
        const res = await fetch('/api/news/' + id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const data = await res.json();
        setMessage(JSON.stringify(data, {}, 4))
    }
    return (
        <div>
            <h3>Restful API 测试</h3>
            <hr />
            <div>
                <Button variant='primary' onClick={() => btn_listNews_click(1)} className="m-1">List Page 1</Button>
                <Button variant='primary' onClick={() => btn_listNews_click(2)} className="m-1">List Page 2</Button>
                <Button variant='primary' onClick={() => btn_listNews_click(3)} className="m-1">List Page 3</Button>
            </div>
            <div>
                <Button variant='success' onClick={() => btn_getNews_click(1)} className="mx-1">Get 1</Button>
                <Button variant='success' onClick={() => btn_getNews_click(2)} className="mx-1">Get 2</Button>
                <Button variant='success' onClick={() => btn_getNews_click(3)} className="mx-1">Get 3</Button>
            </div>
            <hr />
            <pre>
                {message}
            </pre>
        </div>
    )
}

export default News;
