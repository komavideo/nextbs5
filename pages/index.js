import Counter from '../components/Counter'
import MainLayout from '../components/layout/MainLayout'

export default function Home() {
    return (
        <MainLayout>
            <main className='m-3'>
                <Counter />
                <h3 className="text-secondary">Next.js 工程模版</h3>
                <hr />
            </main>
        </MainLayout>
    )
}
