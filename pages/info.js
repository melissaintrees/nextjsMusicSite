import styles from '../components/layout.module.css'
import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'

import {Col, Image} from 'react-bootstrap'

const pageName = 'Info'

export default function MyInfoPage(props){
    console.log(props)
    return (
        <Layout>
      
            <Head>
                <title>{siteTitle} | {pageName}</title>
            </Head>
            <Col lg={6}>
                <h1 className={styles.pagesHeading}>{pageName}</h1>
                <Image className={styles.coverImage} title="hello" src="/images/Melissa-Retouch-Tea-alien-BrandonRizzuto.jpg" alt="woman, Melissa, pours tea for alien friend, Fran" fluid></Image>
                
            </Col>
            <Col lg={6}>
                        <p className="infoText">Melissa St Moore is an eccentric dream pop musician in Chicago, IL. She likes to
                        incorporate symbolism in her songs and sometimes paint pictures with words. Her self-titled debut is
                        available <a className="span-opport" href="https://melissastmoore.bandcamp.com/">everywhere</a>.
                        <br/><br/>
                        A self-taught dancer, conductor of her own train, and comedienne by circumstance, St Moore creates inner and
                        outer worlds with her creative mix of sound and vision that defies traditional genres. Her inspiration is
                        rooted in the music and art of the 1970s in NYC. Lately she has been listening to Santigold, Goldfrapp, New Order, 
                        and Peaches. As a performance artist, video antics and glitchy electronics lend themselves to high
                        energy vocals, and she has played in many venues throughout LA and NYC, including a spot opening for Nina
                        Hagen.
                        <br/>
                        <br/>
                
                        Melissa holds a BA from San Francisco State University and studied Film Music at UCLA with award winning
                        composer, <a href="http://www.triversmyersmusic.com/" className="span-opport">Elizabeth Myers</a>,
                        who advised her in the making of the album. Co-Producer and Engineer
                        Jesse String (Leonard Cohen, Nick Jonas) adds a catchy pop sensibility to the arrangements and Grammy
                        nominated duo, <a href="https://www.instagram.com/watch/?v=1599374006778834" className="span-opport">The Ditty
                            Bops</a>, (Bob Dylan, Natalie Merchant) accent two tracks with atmospheric vocals &
                        piano including on a spontaneous rendition of, "Take me Out to the Ball Game!.” Eric Harvey lends a rock
                        feel to many of the songs, with his high energy guitar playing and industrialized pedals.
                        <br/>
                        <br/> Melissa also works as a Web Developer
                        where she helps build full stack web experiences for companies such as Statefarm, Michelin, TMobile, and Western Union. (photo Brandon Rizzuto 2016)
                    </p>
                    </Col>      
            <style jsx>{`
                .infoText {
                    margin: 10% 0px;
                    text-align: left;
                    font-size: 16px;
                    color: black;
                    font-weight:500;
                    line-height: 30px;
                    font-family: 'Roboto', sans-serif;
                }

             
            `}</style>
        </Layout>
    )
}