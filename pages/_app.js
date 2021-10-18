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
                    image: 'images/melissa-bg-blood-concrete.jpg',
                    textColor: '#fff',
                    overlay: {
                        color: 'red',
                        opacity: '.1'
                    }
                }}
                logo={{
                    src: 'images/Solif-logo-white-centeralign.png',
                    alt: 'logo for eccentric dreampop singer Melissa St Moore',

                }}
                title={{
                    text: 'Skeletor Daze: Halloween 2021',
                    style: {
                        maxWidth: '440px',
                        FontFace: 'fonts/Futura-Bold.woff',
                        fontFamily: 'Futura',

                        paddingTop: '30px',

                    }
                }}
                description={{
                    url: 'https://distrokid.com/hyperfollow/melissastmoore/skeletor-daze',
                    text: 'Pre Save Here',
                    style: {
                        maxWidth: '440px',
                        FontFace: 'fonts/Futura-Bold.woff',
                        fontFamily: 'Futura'
                    },

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
                        image: 'https://cdn-icons-png.flaticon.com/512/3046/3046132.png',
                    },
                    {
                        url: 'https://www.facebook.com/melissastmoore',
                        image: 'https://cdn-icons-png.flaticon.com/512/4406/4406235.png',
                    },
                    {
                        url: 'https://www.twitter.com/melissastmoore',
                        image: 'https://cdn-icons-png.flaticon.com/512/725/725311.png',
                    },
                    {
                        url: 'https://www.instagram.com/melissastmoore',
                        image: 'https://cdn-icons-png.flaticon.com/512/779/779093.png',
                    },
                    {
                        url: 'https://www.youtube.com/melissastmoore',
                        image: 'https://cdn-icons-png.flaticon.com/512/1384/1384060.png',
                    },
                    {
                        url: 'https://open.spotify.com/artist/4RUivryHDsx8Q9s6kcs3YP',
                        image: 'https://cdn-icons-png.flaticon.com/512/408/408697.png'
                    }
                ]}
            />
        </div>
    );
}