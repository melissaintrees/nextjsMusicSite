---
title: 'everyoneisdead'     
videoId: 'KsUfxOvW4SI'
---     

Everyone is Dead - Melissa St Moore
=====================

###Verse 1

A minor          G major       D minor      
This neon night I cannot tell what's happening  

A minor           G major        D minor   
Follow me and see kerosene poured all over

A minor              G major        D minor    
the sound of strange screamers with an empty gaze

A minor              G major        D minor     
well the streets are mean in the place where I am from

###Bridge   

A  (aa ee fff dd), C  (cc dd ccc aa)        
A (aa ee fff ed), E (cc dd aa aaa)


###Chorus

A minor		     G major       
the beat goes on, the rhythm breaks my heart

F major                  E minor    
and when it falls apart, I pick it up

A minor           G major    
they stay silent, but it's too loud to hear

F major 					E minor     
my whole world collapse, the dance goes on



###Verse 2

A minor         G major       D minor         
bottle of fear, thrown back to a sea so mad

A minor      G major       D minor       
stereo light illuminates the thoughts of fools

A minor            G major       D minor         	
who hang on beams, spilling into instant flames

A minor              G major       D minor      
well the streets are clean in the place where I have come.

A minor		      G major       
the beat goes on, the rhythm breaks my heart

F major                  E minor        
and when it falls apart, I pick it up 

A minor		     G major             	  
they stay silent, but it's too loud to hear     

F major                  E minor                	
my whole world collapse


###Bridge 2

a minor               b         c        d      
the time has come to radiate in the sun in the sun

e                       d                      c               
dance fast it’s getting so hot into the sun and this        

b      b        
life is alright     


**Repeat Chorus times Two**     





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