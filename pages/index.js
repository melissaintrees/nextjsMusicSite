import styles from '../components/layout.module.css'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import ArtistCard from '../components/artistcard'
import SpotifyWidget from '../components/spotifywidget'
import { getSortedMusicVideosData } from '../lib/musicvideos'
import Link from 'next/link'
import {Col, Image} from 'react-bootstrap'

const pageName = 'Music'

export default function Home({allMusicVideosData}) {
  return (
    <Layout>
      <Head>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"/>
         <title>{siteTitle} | {pageName}</title>
      </Head>
              <Col lg={6}>
                  <h1 className={styles.pagesHeading}>{pageName}</h1>
                  
                  <ArtistCard />
                  {/* <Image className={styles.coverImage} title="hello" src="/images/final-frt-cover-jacket-cmyk.jpg" alt="woman, Melissa, pours tea for alien friend, Fran" fluid></Image> */}
              </Col>
              <Col lg={6} className="justify-content-center">
      
                  <SpotifyWidget />
        
                  <div className="aroundDeBlog">
                    <h3>lyrics</h3>
                      {allMusicVideosData.map(({title, videoId})=> (
                        <Link href={`/musicvideos/${title.toLowerCase()}`}><a><h1 className="blogHeadings">{title}</h1></a></Link>
                      ))}
                  </div>
              </Col>

      <style jsx>{`
        .bandCampPlayer {
          border: 0;
          width: 100%;
          height: 406px;
        }

        @media (max-width:991px) {
          .bandCampPlayer {
            margin-bottom: 2em;
          }
          .aroundDeBlog {
            text-align: center;
            margin: 1em 0em 3em;
          }
    
        }
      `}</style>

      <style jsx global>{`
        // html,
        // body {
        //   padding: 0;
        //   margin: 0;
        //   font-family: OpenSans, sans-serif;
        // }

        * {
          box-sizing: border-box;
        }
        
      `}</style>
    </Layout>
  )
}

export async function getStaticProps() {
  const allMusicVideosData = getSortedMusicVideosData()
  return {
    props: {
      allMusicVideosData
    }
  }
}

