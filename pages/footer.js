import { Row, Col, Container } from "react-bootstrap"
import Link from "next/link"
import Image from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot, faEarthAmericas } from "@fortawesome/free-solid-svg-icons"

export default function Footer() {
    return (
        <Container fluid className="m1 text-light">
            <Container className="py-4">
                <Row>
                    <Col sm={3}>
                        <h3 className="fw-bold pb-2">
                            <img src="/logo.png" alt="" className="img-fluid" style={{ width: '70px' }} />
                        </h3>
                        <FontAwesomeIcon icon={faLocationDot} />
                        <a> อำเภอเมืองบึงกาฬ <br />จังหวัดบึงกาฬ 38000</a>
                    </Col>
                    <Col sm={3}>
                        <h5 className="fw-bold pb-2">Web Developer</h5>
                        <Link href="https://www.facebook.com/profile.php?id=100009416371123" className="text-light text-decoration-none">Kitsada Butnam</Link>
                        <br />
                        <Link href="https://www.facebook.com/profile.php?id=100035653402081" className="text-light text-decoration-none">Settawat Wongsuna</Link>
                    </Col>
                    <Col sm={3}>
                        <h5 className="fw-bold pb-2">หน้าเว็บไซต์</h5>
                        <Link className="text-decoration-none text-light" href="/">หน้าหลัก</Link><br />
                        <Link className="text-decoration-none text-light" href="/data_village.php">ศูนย์เรียนรู้</Link><br />
                        <Link className="text-decoration-none text-light" href="https://www.u2t.ac.th/">ข่าวสาร</Link><br />
                        <Link className="text-decoration-none text-light" href="https://bk1.udru.ac.th/home/">เกี่ยวกับเรา</Link>
                    </Col>
                    <Col sm={3}>
                        <h5 className="fw-bold pb-2">ติดต่อเรา</h5>
                        <a>62540427102@udru.ac.th</a><br />
                        <FontAwesomeIcon icon={faEarthAmericas} />
                        <a className="text-decoration-none text-light" href="https://www.udru.ac.th/"> udru.ac.th</a><br />
                        <FontAwesomeIcon icon={faEarthAmericas} />
                        <a className="text-decoration-none text-light" href="https://www.mhesi.go.th/"> mhesi.go.th</a><br />
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}