// this is for global styles
//n Next.js, you can add global CSS files by importing them from pages/_app.js. You cannot import global CSS anywhere else.
// https://reacttricks.com/nested-dynamic-layouts-in-next-apps/
// ensure all pages have Bootstrap CSS

import '../styles/customTheme.scss'
import '../styles/global.css'
import Layout from '../components/layout'
import UnderConstruction from 'react-under-construction';
import 'react-under-construction/build/css/index.css';


export default function myApp({ Component, pageProps }) {
    return (

        <div>

            {/* // <Component {...pageProps} /> */}
            <UnderConstruction

                background={{
                    image: 'images/honeycomb.png',
                    textColor: '#fff',
                    overlay: {
                        color: 'black',
                        opacity: '.9'
                    }
                }}
                logo={{
                    src: 'images/pixelperfectlogo.svg',
                    alt: 'alt text'
                }}
                // title={{
                //     text: 'Rubbby'
                // }}
                description={{
                    text: 'will bee back real soon.',
                    style: {
                        maxWidth: '440px',
                    }
                }}
                // subscribe={{
                //     placeholder: 'Your Email Here',
                //     buttonText: 'Subscribe',
                //     onSubmit: (value) => {
                //         console.log('user typed email :', value);
                //     }
                // }}
                links={[
                    {
                        url: 'https://www.tiktok.com/@melissastmoore_',
                        image: 'https://cdn-icons-png.flaticon.com/512/3046/3046123.png',
                    },
                    {
                        url: 'https://www.facebook.com/melissastmoore',
                        image: 'https://cdn-icons-png.flaticon.com/512/4406/4406235.png',
                    },
                    {
                        url: 'https://www.twitter.com/melissastmoore',
                        image: 'https://cdn-icons-png.flaticon.com/512/220/220618.png',
                    },
                    {
                        url: 'https://www.instagram.com/melissastmoore',
                        image: 'https://cdn-icons-png.flaticon.com/512/779/779093.png',
                    },
                ]}
            />
        </div>
    );
}