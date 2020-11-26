import Head from 'next/head'
import Layout, { siteTitle } from  '../../components/layout'
import { getAllMusicVideoTitles, getMusicVideoData } from '../../lib/musicvideos'

export default function MusicVideos({musicVideoData}) {
    return (
        <Layout>
            <Head>

                <title>{siteTitle} | {musicVideoData.title}</title>
            </Head>
            {/* {musicVideoData.title} */}
            <br />
            <div className="contentMusicvideos" dangerouslySetInnerHTML={{__html: musicVideoData.contentHtml }} />
        </Layout>
    )
}

export async function getStaticPaths() {
    // Return a list of possible value for videos
    const paths = getAllMusicVideoTitles()
    return {
      paths,
      fallback: false
    }
}

export async function getStaticProps({ params }) {
    // Fetch necessary data for the music video page using params.musivVideo
    const musicVideoData = await getMusicVideoData(params.title)
    // (console.log(musicVideoData))
    return {
        
        props: {
            musicVideoData
           
        }
    }
}