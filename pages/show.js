import styles from '../components/layout.module.css'
import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import { Col } from 'react-bootstrap'
import YouTube from 'react-youtube'

const YT_API_KEY = process.env.YT_API_KEY;
const BAF_PLAYLIST_ID = process.env.BAF_PLAYLIST_ID;
const pageName = 'Show'
const opts = {
    // height: '185px',
    width: '100%',
    playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
    },
};

function TourPage({ videosData }) {
    console.log(videosData.items)
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
                    {/* if (titl.snippet.title.includes("BAF")) { */ }
                    {/* TODO: Ajax call here to get this array and store it in a json, */ }
                    bafArr.push(titl.contentDetails.videoId)
                    console.log(titl.contentDetails.videoId)
                    {/* }  */ }
                }
                )}
            {
                console.log(bafArr)
            }
            {
                bafArr.map((vi, ind) => {

                    return (
                        ind == 0 ? (
                            // first one margin bottom: 145px
                            <Col lg={6} key={ind}>
                                <h1 className={styles.pagesHeading}>{pageName}</h1>
                                <YouTube videoId={vi} opts={opts} key={ind} />
                            </Col>

                        ) : (
                                ind == (bafArr.length - 1) ? (
                                    // odd ones no extra styles
                                    <Col lg={6} key={ind}>
                                        <h1 className="lastVideo"></h1>
                                        <YouTube videoId={vi} opts={opts} key={ind} />
                                        <h1 className="lastVideo"></h1>
                                    </Col>
                                ) : (
                                        // even ones margin bottom: 145px
                                        <Col lg={6} key={ind}>
                                            <h1 className="tourMargins"></h1>
                                            <YouTube videoId={vi} opts={opts} key={ind} />
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

    // https://console.cloud.google.com/iam-admin/quotas?pli=1&project=melissastmoore&folder=&organizationId=
    const res = await fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails&maxResults=50&playlistId=${BAF_PLAYLIST_ID}&prettyPrint=true&key=${YT_API_KEY}`)

    console.log(res)
    {/* TODO: test the length of res against the store BAFVIDEOID array?  */ }
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