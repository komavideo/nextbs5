import MainLayout from '../../components/layout/MainLayout'
import Counter from '../../components/widgets/Counter'
import Profile from '../../components/auth/Profile'

const ProfilePage = () => {
    return (
        <MainLayout title='我的主页'>
            <main className='m-3'>
                <Counter />
                <Profile />
            </main>
        </MainLayout>
    )
}

export default ProfilePage;
