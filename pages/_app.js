import 'bootstrap/dist/css/bootstrap.min.css';
import SSRProvider from 'react-bootstrap/SSRProvider';

import { MyWebContextProvider } from "../store";

function MyApp({ Component, pageProps }) {
    return (
        <MyWebContextProvider>
            <Component {...pageProps} />
        </MyWebContextProvider>
        // <SSRProvider>
        // </SSRProvider>
    )
}

export default MyApp
