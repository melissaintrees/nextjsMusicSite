import styles from '../components/layout.module.css'
import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'

const pageName = 'Videos'

export default function VideoPage(){
    return (
        <Layout>
        <div>
            <Head>
            <title>{siteTitle} | {pageName}</title>
            </Head>
            <h1 className={styles.pagesHeading}>{pageName}</h1>
            <style jsx>{`

            
            `}</style>
        
        
        </div>
        </Layout>)

    
}