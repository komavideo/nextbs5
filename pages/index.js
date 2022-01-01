import News from '../components/News'
import Header from '../components/Header'

export default function Home() {
    return (
        <div>
            <Header />
            <main className='m-3'>
                <News />
            </main>
        </div>
    )
}
