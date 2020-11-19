import Link from "next/link";
import { useRouter } from "next/router";
import styles from './layout.module.css'

export const MyNav = () => {

  const router = useRouter();

  return (
    <div className={styles.headerChild}>
      <li className={router.pathname == "/" ? `${styles.highlight}` : ""}>
        <Link href="/">music</Link>
      </li>
      <li className={router.pathname == "/info" ? `${styles.highlight}` : ""}>
        <Link href="/info">info</Link>
      </li>
      <li className={router.pathname == "/videos" ? `${styles.highlight}` : ""}>
        <Link href="/videos">videos</Link>
      </li>
      <li className={router.pathname == "/tour" ? `${styles.highlight}` : ""}>
        <Link href="/tour">show</Link>
      </li>
      <div className={styles.socialGrp}>
            <a href="https://mailchi.mp/bacbde16cf94/mailinglist" ><i className="far fa-newspaper"></i></a>
            <a href="https://www.instagram.com/melissastmoore" ><i className="fab fa-instagram"></i></a>
            <a href="http://www.youtube.com/melissastmoore" ><i className="fab fa-youtube"></i></a>
            <a href="https://artists.spotify.com/c/artist/4RUivryHDsx8Q9s6kcs3YP/profile/overview" ><i className="fab fa-spotify"></i></a>
        </div>
    </div>
  );
};
