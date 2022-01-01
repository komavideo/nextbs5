import MainLayout from '../components/layout/MainLayout'
import News from '../components/News'
export default function Home() {
    return (
        <MainLayout>
            <main className='m-3'>
                <News />
            </main>
        </MainLayout>
    )
}
