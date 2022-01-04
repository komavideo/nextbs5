import React, { useEffect, useState, useContext } from "react";
import Link from "next/link";
import { signOut } from 'next-auth/react'

import { Button } from "react-bootstrap";
import { headers } from '../../utils/httpHandler';
import MyWebContext from '../../store';

const AuthHeader = () => {
    const myWebCtx = useContext(MyWebContext);

    useEffect(async () => {

        if (!myWebCtx.user) {
            const res = await fetch('/api/auth/profile', {
                method: 'GET',
                headers,
            })
            const data = await res.json();
            console.log(data)
            if (data && data.result == 'ok') {
                myWebCtx.authUser(data.user)
            }
        }
    }, [myWebCtx])

    const btnSignOut_click = () => {
        signOut()
    }

    return (
        <React.Fragment>
            {myWebCtx.user ? (
                <Button className="btn btn-sm btn-success" onClick={btnSignOut_click}>退出</Button>
            ) : (
                <Link href="/auth/login">
                    <Button className="btn btn-sm btn-danger">登录</Button>
                </Link >
            )}
        </React.Fragment >
    )
}

export default AuthHeader;
