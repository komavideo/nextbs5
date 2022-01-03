import Counter from '../components/Counter'
import MainLayout from '../components/layout/MainLayout'
import Home from '../components/Home'

export default function Index() {
    return (
        <MainLayout title='主页'>
            <main className='m-3'>
                <Counter />
                <Home />
            </main>
        </MainLayout>
    )
}
