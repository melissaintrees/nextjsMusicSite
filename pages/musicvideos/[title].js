import Layout from  '../../components/layout'
import { getAllMusicVideoTitles, getMusicVideoData } from '../../lib/musicvideos'

export default function MusicVideos({musicVideoData}) {
    return (
        <Layout>
            {musicVideoData.title}
            <br />
            <div dangerouslySetInnerHTML={{__html: musicVideoData.contentHtml }} />
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