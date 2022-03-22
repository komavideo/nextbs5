import 'bootstrap/dist/css/bootstrap.min.css';
import SSRProvider from 'react-bootstrap/SSRProvider';

import '../styles/globals.css'

import { MyWebContextProvider } from "../store";

function MyApp({ Component, pageProps }) {
    return (
        <MyWebContextProvider>
            <SSRProvider>
                <Component {...pageProps} />
            </SSRProvider>
        </MyWebContextProvider>
    )
}

export default MyApp
