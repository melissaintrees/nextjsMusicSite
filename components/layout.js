import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Head from 'next/head'
import { MyNav } from './mynav'

import { Container, Row } from 'react-bootstrap'


const name = 'Melissa St Moore'
const year = new Date().getFullYear();
export const siteTitle = 'Melissa St Moore'
const siteURL = 'http://melissastmoore.com/'
export default function Layout({ children }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700?Roboto&display=swap" rel="stylesheet" />
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1,minimum-scale=1,maximum-scale=10,minimal-ui"
                />
                <meta
                    name="og:description"
                    content="website for eccentric dreampop songstress Melissa St Moore"
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={siteURL} />
                <meta property="og:image" content={`${siteURL}images/info.1.jpg`} />

                <meta name="keywords" content="independent music, dreampop, eccentric dreampop, bandcamp artists, spotify list, spotify, fresh sound, bowie moonage daydream live, avante garde" />
                <title>{siteTitle} | pageName</title>
                <script src="https://www.youtube.com/player_api"></script>
                =
                <link
                    rel="preload"
                    href="/fonts/Futura-Bold.woff2"
                    as="font"
                    crossOrigin=""
                />
                <link
                    rel="preload"
                    href="/fonts/Futura-Bold.woff"
                    as="font"
                    crossOrigin=""
                />
                =
            </Head>
            <header className={styles.headerContainer}>
                <img src="/images/logo-melissa-st-moore.png" alt="Melissa St Moore Logo" className={styles.logo} />
                <MyNav></MyNav>
            </header>
            <main>
                <div className={styles.content}>

                    <Container>
                        <Row>
                            {children}
                        </Row>
                    </Container>
                </div>

            </main>
            <footer className={styles.footer}>
                <p>Site by <a href="https://www.stmoore.net" >St Moore Dev </a>
                    <i className="fa fa-copyright"></i> {year}</p>
            </footer>
        </div>
    )
}

//   style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"
//   style="color: #cccccc; text-decoration: none;"
//   style="color: #cccccc; text-decoration: none;"