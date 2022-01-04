import Counter from '../components/widgets/Counter'
import MainLayout from '../components/layout/MainLayout'
import RApi from '../components/RApi'

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
