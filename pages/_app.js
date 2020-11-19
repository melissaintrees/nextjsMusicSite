// this is for global styles
//n Next.js, you can add global CSS files by importing them from pages/_app.js. You cannot import global CSS anywhere else.
// https://reacttricks.com/nested-dynamic-layouts-in-next-apps/

import '../styles/global.css'
import Layout from '../components/layout'

export default function myApp({ Component, pageProps }) {
    return (
            <Component {...pageProps} />
    );
}