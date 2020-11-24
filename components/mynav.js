import Link from "next/link";
import { useRouter } from "next/router";
import styles from './layout.module.css'
import {Navbar, Nav} from 'react-bootstrap'

export const MyNav = () => {

  const router = useRouter();

  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
  {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    {/* <Nav> */}
    <Nav className={styles.headerChild} activeKey="/home">
    <Nav.Item className={router.pathname == "/" ? `${styles.highlight}` : ""}>
      <Nav.Link href="/">music</Nav.Link>
    </Nav.Item>
    <Nav.Item className={router.pathname == "/info" ? `${styles.highlight}` : ""}>
    <Nav.Link href="/info">info</Nav.Link>
    </Nav.Item>
    <Nav.Item className={router.pathname == "/videos" ? `${styles.highlight}` : ""}>
    <Nav.Link href="/videos">videos</Nav.Link>
    </Nav.Item>
    <Nav.Item className={router.pathname == "/tour" ? `${styles.highlight}` : ""}>
      <Nav.Link href="/tour">show</Nav.Link>
    </Nav.Item>

    
    <div className={styles.socialGrp}>
    <Nav.Item>
            <a href="https://mailchi.mp/bacbde16cf94/mailinglist" ><i className="far fa-newspaper"></i></a>
            <a href="https://www.instagram.com/melissastmoore" ><i className="fab fa-instagram"></i></a>
            <a href="http://www.youtube.com/melissastmoore" ><i className="fab fa-youtube"></i></a>
            <a href="https://artists.spotify.com/c/artist/4RUivryHDsx8Q9s6kcs3YP/profile/overview" ><i className="fab fa-spotify"></i></a>
            </Nav.Item>
        </div>
     
  </Nav>

  
  </Navbar.Collapse>
</Navbar>

  );
};
