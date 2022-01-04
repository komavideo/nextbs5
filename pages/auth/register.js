import MainLayout from '../../components/layout/MainLayout'
import Counter from '../../components/widgets/Counter'

import Register from '../../components/auth/Register'

const RegisterPage = () => {
    return (
        <MainLayout title='注册用户'>
            <main className='m-3'>
                <Counter />
                <Register />
            </main>
        </MainLayout>
    )
}

export default RegisterPage;
