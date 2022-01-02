import Counter from '../components/Counter'
import MainLayout from '../components/layout/MainLayout'
import RApi from '../components/RApi'

export default function Home() {
    return (
        <MainLayout>
            <main className='m-3'>
                <Counter />
                <RApi />
            </main>
        </MainLayout>
    )
}
