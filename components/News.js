import { React, useState } from "react";
import { Button } from 'react-bootstrap'

const headers = {
    'Content-Type': 'application/json',
}

const News = () => {
    const [message, setMessage] = useState('')

    const btn_listNews_click = async (pageNumber) => {
        const res = await fetch('/api/news?p=' + pageNumber, {
            method: 'GET',
            headers,
        })
        const data = await res.json();
        setMessage(JSON.stringify(data, {}, 4))
    }

    const btn_getNews_click = async (id) => {
        const res = await fetch('/api/news/' + id, {
            method: 'GET',
            headers,
        })
        const data = await res.json();
        setMessage(JSON.stringify(data, {}, 4))
    }

    const btn_createNews_click = async () => {
        const res = await fetch('/api/news', {
            method: 'POST',
            headers,
            body: JSON.stringify({
                title: '一条最新新闻'
            })
        })
        const data = await res.json();
        setMessage(JSON.stringify(data, {}, 4))
    }

    const btn_updateNews_click = async (id) => {
        const res = await fetch('/api/news/' + id, {
            method: 'PUT',
            headers,
            body: JSON.stringify({
                title: `最新新闻${id} (更新后)`
            })
        })
        const data = await res.json();
        setMessage(JSON.stringify(data, {}, 4))
    }

    const btn_deleteNews_click = async (id) => {
        const res = await fetch('/api/news/' + id, {
            method: 'DELETE',
            headers,
        })
        const data = await res.json();
        setMessage(JSON.stringify(data, {}, 4))
    }

    return (
        <div>
            <h3>Restful API 测试</h3>
            <hr />
            <div className="my-1">
                <Button variant='primary' onClick={() => btn_listNews_click(1)} className="mx-1">List Page 1</Button>
                <Button variant='primary' onClick={() => btn_listNews_click(2)} className="mx-1">List Page 2</Button>
                <Button variant='primary' onClick={() => btn_listNews_click(3)} className="mx-1">List Page 3</Button>
            </div>
            <div className="my-1">
                <Button variant='secondary' onClick={() => btn_getNews_click(1)} className="mx-1">Get 1</Button>
                <Button variant='secondary' onClick={() => btn_getNews_click(2)} className="mx-1">Get 2</Button>
                <Button variant='secondary' onClick={() => btn_getNews_click(3)} className="mx-1">Get 3</Button>
            </div>
            <div className="my-1">
                <Button variant='warning' onClick={() => btn_createNews_click()} className="mx-1 text-white">Create 1</Button>
            </div>
            <div className="my-1">
                <Button variant='success' onClick={() => btn_updateNews_click(1)} className="mx-1">Update 1</Button>
                <Button variant='success' onClick={() => btn_updateNews_click(2)} className="mx-1">Update 2</Button>
                <Button variant='success' onClick={() => btn_updateNews_click(3)} className="mx-1">Update 3</Button>
            </div>
            <div className="my-1">
                <Button variant='danger' onClick={() => btn_deleteNews_click(1)} className="mx-1">Delete 1</Button>
                <Button variant='danger' onClick={() => btn_deleteNews_click(2)} className="mx-1">Delete 2</Button>
                <Button variant='danger' onClick={() => btn_deleteNews_click(3)} className="mx-1">Delete 3</Button>
            </div>

            <hr />
            <pre>
                {message}
            </pre>
        </div>
    )
}

export default News;
