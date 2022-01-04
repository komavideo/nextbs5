import Counter from '../components/widgets/Counter'
import MainLayout from '../components/layout/MainLayout'
import RApi from '../components/RApi'

import { getSession } from 'next-auth/react'

export default function RApiPage() {
    return (
        <MainLayout title='Restful API 测试'>
            <main className='m-3'>
                <Counter />
                <RApi />
            </main>
        </MainLayout>
    )
}
export async function getServerSideProps(context) {
    const session = await getSession({ req: context.req })
    if (!session) {
        return {
            redirect: {
                destination: '/auth/login',
                permanent: false,
            }
        }
    }
    return {
        props: { session },
    }
}