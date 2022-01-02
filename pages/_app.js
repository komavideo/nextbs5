import 'bootstrap/dist/css/bootstrap.min.css';
import SSRProvider from 'react-bootstrap/SSRProvider';

import { storeWrapper } from '../redux/store'

function MyApp({ Component, pageProps }) {
    return (
        <SSRProvider>
            <Component {...pageProps} />
        </SSRProvider>
    )
}

export default storeWrapper.withRedux(MyApp) 
