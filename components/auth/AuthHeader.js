import React from "react";
import Link from "next/link";

import { Button } from "react-bootstrap";

const AuthHeader = () => {
    return (
        <React.Fragment>
            <Link href="/api/auth/signin">
                <Button className="btn btn-sm btn-danger">登录</Button>
            </Link>
        </React.Fragment>
    )
}

export default AuthHeader;
