import styles from '../components/layout.module.css'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import ArtistCard from '../components/artistcard'
import SocialWidget from '../components/socialwidget'
import { getSortedMusicVideosData } from '../lib/musicvideos'
import Link from 'next/link'
import {Col, Image} from 'react-bootstrap'

const pageName = 'Music'

export default function Home({allMusicVideosData}) {
  return (
    <Layout>
      <Head>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Monoton&display=swap" rel="stylesheet"/>
         <title>{siteTitle} | {pageName}</title>
      </Head>
              <Col lg={6}>
                  <h1 className={styles.pagesHeading}>{pageName}</h1>
                  
                  {/* <ArtistCard /> */}
                  <Image className={styles.coverImage} title="hello" src="/images/final-frt-cover-jacket-cmyk.jpg" alt="woman, Melissa, pours tea for alien friend, Fran" fluid></Image>
              </Col>
              <Col lg={6}>
                  {/* style="border: 0; width: 100%; height: 406px;" */}
                  <iframe className="bandCampPlayer" src="https://bandcamp.com/EmbeddedPlayer/album=3003526826/size=large/bgcol=333333/linkcol=e32c14/artwork=none/transparent=true/" seamless><a href="http://melissastmoore.bandcamp.com/album/melissa-st-moore">Melissa St Moore by Melissa St Moore</a></iframe>
                  <SocialWidget />
                  <Link href="/tour"><a><h1 className="blogHeadings">Good News!</h1></a></Link>
                  {allMusicVideosData.map(({title, videoId})=> (
                    <Link href={`/musicvideos/${title.toLowerCase()}`}><a><h1 className="blogHeadings">{title}</h1></a></Link>
                  ))}
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

