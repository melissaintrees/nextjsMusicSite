import styles from '../components/layout.module.css'
import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import {Col} from 'react-bootstrap'
import YouTube from 'react-youtube'
import fs from 'fs'

const pageName = 'Videos'
const opts = {
    // height: '185px',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

function VideoPage({videoData}){
    console.log({videoData})
    return (
        <Layout>  
            <Head>
            <title>{siteTitle} | {pageName}</title>
            </Head>
            
            {videoData.map(({title, videoId}, ind) => {
                return (
                    ind == 0 ? (
                        <Col lg={6}>
                            <h1 className={styles.pagesHeading}>{pageName}</h1>
                            <YouTube videoId={videoId} opts={opts}/>
                            {/* <h1>{title}</h1> */}
                        </Col>
                    ) : (
                        <Col lg={6}>
                            <YouTube videoId={videoId} opts={opts}/>
                            {/* <h1>{title}</h1> */}
                        </Col>
                    ))     

            })}
            <style jsx>{`

            
            `}</style> 
        </Layout>)
}

    // This function gets called at build time
    export async function getStaticProps() {
        // Call an external API endpoint to get videosData
        let rawData = fs.readFileSync('./public/musicVideos.json')
        let videoData = JSON.parse(rawData);
        // const res = await fetch('./public/test.json')
        // const videosData = await res.json()
        
        // By returning { props: { videosData } }, the VideoPage component
        // will receive `videosData` as a prop at build time
        return {
            props: {
                videoData
            },
        }
    }
    export default VideoPage