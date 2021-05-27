import Link from "next/link";
import { useRouter } from "next/router";
import styles from './layout.module.css'
import { Navbar, Nav } from 'react-bootstrap'
import ReactAudioPlayer from 'react-audio-player';

export const MyNav = () => {

  const router = useRouter();

  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        {/* <Nav> */}
        <Nav className={styles.headerChild} activeKey="/home">
          {/* <Nav.Item className={router.pathname == "/" ? `${styles.highlight}` : ""}>
      <Nav.Link href="/">music</Nav.Link>
    </Nav.Item> */}
          <Link href="/">
            <a className={router.pathname == "/" ? `${styles.highlight}` : ""} >
              home
      </a>
          </Link>

          <a href="https://smarturl.it/MaDebut">Listen</a>

          {/* <Link href="https://smarturl.it/MaDebut"></Link> */}
          <Link href="/info">
            <a className={router.pathname == "/info" ? `${styles.highlight}` : ""} >
              info
        </a>
          </Link>
          <Link href="/videos">
            <a className={router.pathname == "/videos" ? `${styles.highlight}` : ""} >
              videos
      </a>
          </Link>
          <Link href="/show">
            <a className={router.pathname == "/show" ? `${styles.highlight}` : ""} >
              show
      </a>
          </Link>

          <div className={styles.socialGrp}>

            <Nav.Item>
              <a href="https://mailchi.mp/bacbde16cf94/mailinglist" ><i className="far fa-newspaper"></i></a>
              <a href="https://www.instagram.com/melissa_in_trees" ><i className="fab fa-instagram"></i></a>
              <a href="http://www.youtube.com/melissastmoore" ><i className="fab fa-youtube"></i></a>
              <a href="https://open.spotify.com/artist/4RUivryHDsx8Q9s6kcs3YP" ><i className="fab fa-spotify"></i></a>
            </Nav.Item>

          </div>

        </Nav>


      </Navbar.Collapse>
    </Navbar>

  );
};
