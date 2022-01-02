import React from "react";
import { useContext } from 'react';
import { Button } from "react-bootstrap";
import MyWebContext from '../store';

const Counter = () => {
    const myWebCtx = useContext(MyWebContext);
    return (
        <React.Fragment>
            <div className="border p-1 mb-2 rounded d-flex justify-content-between align-items-center bg-light">
                <div className="text-secondary">useContext 管理</div>
                <div>
                    <span className="me-3 text-secondary">{myWebCtx.count}</span>
                    <Button variant="success" className="m-1 btn-sm" onClick={() => { myWebCtx.addCount() }}>加1</Button>
                    <Button variant="success" className="m-1 btn-sm" onClick={() => { myWebCtx.minusCount() }}>减1</Button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Counter;
