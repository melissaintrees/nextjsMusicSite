---
title: 'Amethyst'
videoId: 'KsUfxOvW4SI'
---

We recommend using **Static Generation** (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request.

You can use Static Generation for many types of pages, including:

- Marketing pages
- Blog posts
- E-commerce product listings
- Help and documentation

You should ask yourself: "Can I pre-render this page **ahead** of a user's request?" If the answer is yes, then you should choose Static Generation.

On the other hand, Static Generation is **not** a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request.

In that case, you can use **Server-Side Rendering**. It will be slower, but the pre-rendered page will always be up-to-date. Or you can skip pre-rendering and use client-side JavaScript to populate data.



<!-- import styles from '../components/layout.module.css'
import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import {Col} from 'react-bootstrap'
import YouTube from 'react-youtube'
import fs from 'fs'

const pageName = 'amethyst'
const opts = {
    // height: '185px',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

function AmethystPage({videoData}){
    console.log({videoData})
    return (
        <Layout>  
            <Head>
            <title>{siteTitle} | {pageName}</title>
            </Head>
                <Col lg={12}>
                    <h1 className={styles.pagesHeading}>{pageName}</h1>
                    <YouTube videoId={videoData.videoId} opts={opts}/>
                    {/* <h1>{title}</h1> */}
                </Col>   
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
    export default AmethystPage -->