import styles from '../components/layout.module.css'
import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'

import { Col, Image } from 'react-bootstrap'

const pageName = 'Info'

export default function MyInfoPage(props) {
    console.log(props)
    return (
        <Layout>

            <Head>
                <title>{siteTitle} | {pageName}</title>
            </Head>
            <Col lg={6}>
                <h1 className={styles.pagesHeading}>{pageName}</h1>
                <Image className={styles.coverImage} title="hello" src="/images/Melissa-Retouch-Tea-alien-BrandonRizzuto.jpg" alt="woman, Melissa, pours tea for alien friend, Fran" fluid></Image>

            </Col>
            <Col lg={6}>
                <p className="infoText">Melissa In Trees is a singer, music producer and content creator from Los Angeles, CA. She creates eccentric dream pop, indy rock, sing song raps, that are influenced by surreal darkness & realistic brightness.
                <br /><br />
                Besides music, she owns a web development company, St Moore Dev, that focuses on using technology to help people, and hosts a good news program called Bananas AF through her YouTube channel, along with Videos, Covers, and Web Tutorials.
                <br />
                    <br />

                Melissa released an 8 song debut album which is being released as singles over the course of 2021.

                </p>
            </Col>
            <style jsx>{`
                .infoText {
                    margin: 10% 0px;
                    text-align: left;
                    font-size: 16px;
                    color: black;
                    font-weight:500;
                    line-height: 30px;
                    font-family: 'Roboto', sans-serif;
                }

             
            `}</style>
        </Layout>
    )
}