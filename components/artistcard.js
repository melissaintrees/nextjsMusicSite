import Link from "next/link";
import { useRouter } from "next/router";
import styles from './artistcard.module.scss'
import Image from 'react-bootstrap/Image'

export default function ArtistCard ({props}) {
    return (
        <div className={styles.artistCardMain}>
        <h2 className={styles.artistCardTitleChild}><a href="https://artists.spotify.com/c/artist/4RUivryHDsx8Q9s6kcs3YP/profile/overview">Stream Here</a></h2>
        <Image className={styles.artistCardImgChild} src="https://drive.google.com/uc?export=view&id=1tzjagpB3HqTZfGnnNdYQEDT0bNdaPV_H" alt="Melissa St Moore" fluid></Image>
        </div>    
    )

}