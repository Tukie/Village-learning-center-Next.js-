import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faIgloo,
  faMagnifyingGlass,
  faRss,
  faAddressBook,
} from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";

function NavScrollExample() {
  return (
    <Navbar
      Navbar
      variant="dark"
      expand="lg"
      sticky="top"
      className="fw-bold m1"
    >
      <Container sm>
        <Navbar.Brand>
          <Link href="/">
            <Image src="/logo.png" width={40} height={40} alt="Logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="m-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link href="/" className="nav-link active mx-2">
              <FontAwesomeIcon icon={faHome} className="me-1" />
              หน้าหลัก
            </Link>
            <Link href="/data_village" className="nav-link active mx-2">
              <FontAwesomeIcon icon={faIgloo} className="me-1" />
              ข้อมูลศูนย์
            </Link>
            <Link href="/search" className="nav-link active mx-2">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="me-1" />
              ค้นหาศูนย์เรียนรู้
            </Link>
            <Link
              href="https://www.u2t.ac.th/"
              className="nav-link active mx-2"
            >
              <FontAwesomeIcon icon={faRss} className="me-1" />
              ข่าวสาร
            </Link>
            <Link href="form" className="nav-link active mx-2">
              <FontAwesomeIcon icon={faAddressBook} className="me-1" />
              ติดต่อเรา
            </Link>
          </Nav>
          <Link
            className="me-1 btn btn-light"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfTyci4JNpN3GG0nlHmUt-sWkOuCvrRF37IRBH3XqgyFf7shw/viewform?usp=send_form"
            variant="light"
            target="_blank"
          >
            <FontAwesomeIcon icon={faStar} className="me-1" />
            ให้คะแนนเว็บไซต์
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
