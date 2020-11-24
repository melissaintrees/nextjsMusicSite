import styles from '../components/layout.module.css'
import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import {Col} from 'react-bootstrap'
import YouTube from 'react-youtube'

const pageName = 'Show'
const opts = {
    // height: '185px',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

function TourPage({videosData}){
    let resData = [];
    let bafArr = [];
    resData.push(videosData.items)
    return (
        <Layout>  
            <Head>
            <title>{siteTitle} | {pageName}</title>
            </Head>
                {
                    resData[0].map((titl, id) => {
                        if (titl.snippet.title.includes("BAF")) {
                            bafArr.push(titl.id.videoId)

                        } 
                    }
                    )}
                    {
                        console.log(bafArr.reverse())
                    }
                    {   
                        bafArr.map((vi, ind) => {
                            
                               return (
                                ind == 0 ? (
                                    // first one margin bottom: 145px
                                    <Col lg={6} key={ind}>
                                        <h1 className={styles.pagesHeading}>{pageName}</h1>
                                        <YouTube videoId={vi} opts={opts} key={ind}/>
                                    </Col>
      
                                  ) : (
                                ind == (bafArr.length - 1) ? (
                                        // odd ones no extra styles
                                        <Col lg={6} key={ind}>
                                             <h1 className="lastVideo"></h1>
                                            <YouTube videoId={vi} opts={opts} key={ind}/>
                                            <h1 className="lastVideo"></h1>
                                        </Col>
                                    ) : (
                                        // even ones margin bottom: 145px
                                        <Col lg={6} key={ind}>
                                            <h1 className="tourMargins"></h1>
                                            <YouTube videoId={vi} opts={opts} key={ind}/>
                                        </Col>
                                    ))
                                )
                        })
                    }
                    
            <style jsx>{`
                .tourMargins {
                    padding-bottom: 50px!important;
                }
                .lastVideo {
                  margin-top: 72px!important;
                }
            `}
            </style> 
        </Layout>)
}
    // This function gets called at build time
    export async function getStaticProps() {
        // Call an external API endpoint to get videosData
        const res = await fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCTBPKPdlmmh801HUD3RU3rA&maxResults=30&order=date&key=AIzaSyC_agb1LudB3s3tzYyhEZJVfg6T-gTl1xM')
        const videosData = await res.json()
    
        // By returning { props: { videosData } }, the VideoPage component
        // will receive `videosData` as a prop at build time
        return {
        props: {
            videosData,
        },
        }
    }

    export default TourPage