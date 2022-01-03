import React from "react";
import MainLayout from '../components/layout/MainLayout'
import Counter from '../components/widgets/Counter'

import Login from "../components/auth/Login";

const LoginPage = () => {
    return (
        <MainLayout title='用户登录'>
            <main className='m-3'>
                <Counter />
                <Login />
            </main>
        </MainLayout>
    )
}

export default LoginPage;
