import { Container } from "react-bootstrap";
import Image from "next/image";
import Head from "next/head";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap, faPhone, faClock,faEye } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

export default function seka_detail() {
  return (
    <>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Head>
          <title>ศูนย์เรียนรู้เกษตรอินทรีย์ PGS</title>
        </Head>

        <Container sm className="my-5">
          <div className="rounded-5 overflow-hidden shadow">
            <div
              className="bg-imagePr p-5 d-flex flex-column align-content-center justify-content-end"
              style={{ height: "500px" }}
            >
              <div>
                <p
                  href="/seka_detail"
                  className="fw-bold bg-light text-center p-2 rounded-5 btn btn-light mb-3 fs-4"
                >
                  ศูนย์เรียนรู้เกษตรอินทรีย์ PGS
                </p>
              </div>
              <div className="d-inline-block">
                <div className="d-inline-block">
                  <div className="d-flex rounded-pill bg-light py-2 ps-2 pe-4 ">
                    <Image
                      src="/pronjarean/profile.jpg"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{
                        width: "45px",
                        height: "45px",
                        objectFit: "cover",
                      }}
                      className="rounded-circle me-2"
                      alt="profile"
                    ></Image>
                    <div className="d-inline-block">
                      <p className="text-primary fw-bold m-0">นายสมัย สีใส</p>
                      <p className="m-0">ผู้ดูแลศุนย์</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-body p-5 my-5 shadow rounded-5">
            <Row>
              <Col sm={3}>
                <div className="text-center">
                  <div style={{ height: "60px" }}>
                    <FontAwesomeIcon
                      icon={faMap}
                      className="text-danger fs-1"
                    />
                  </div>
                  <h5 className="fw-bold">ที่ตั้งศูนย์</h5>
                  <p>3P77+5RC ตำบล พรเจริญ อำเภอ พรเจริญ บึงกาฬ 38220</p>
                </div>
              </Col>
              <Col sm={3}>
                <div className="text-center">
                  <div style={{ height: "60px" }}>
                    <Image
                      src="/pronjarean/profile.jpg"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{
                        width: "45px",
                        height: "45px",
                        objectFit: "cover",
                      }}
                      className="rounded-circle "
                      alt="profile"
                    ></Image>
                  </div>
                  <h5 className="fw-bold">ผู้ดูแลศุนย์</h5>
                  <p>นายสมัย สีใส</p>
                </div>
              </Col>
              <Col sm={3}>
                <div className="text-center">
                  <div style={{ height: "60px" }}>
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="text-success fs-1 mb-3"
                    />
                  </div>
                  <h5 className="fw-bold">ติดต่อ</h5>
                  <p>โทร. 0952109518</p>
                </div>
              </Col>
              <Col sm={3}>
                <div className="text-center">
                  <div style={{ height: "60px" }}>
                    <FontAwesomeIcon
                      icon={faClock}
                      className="text-secondary fs-1 mb-3"
                    />
                  </div>
                  <h5 className="fw-bold">เวลาทำการ</h5>
                  <p>08.30 - 16.30 น.</p>
                </div>
              </Col>
            </Row>
          </div>

          {/* Content */}

          <Row className="my-5">
            <Col sm={6} className="mb-4">
              <Image
                src="/pronjarean/img1.png"
                width={1156}
                height={651}
                className="img-fluid rounded-5 unselectable"
                alt="sign"
                loading="lazy"
              />
            </Col>
            <Col sm={6} className="mb-4">
              <Image
                src="/pronjarean/img2.png"
                width={1156}
                height={651}
                className="img-fluid rounded-5 unselectable"
                alt="inside-village"
                loading="lazy"
              />
            </Col>
            <p>
              ศูนย์เรียนรู้เกษตรอินทรีย์ PGS ที่ตั้งอยู่ที่ตำบลพรเจริญ
              อำเภอพรเจริญ จังหวัดบึงกาฬ
              เป็นศูนย์เรียนรู้ที่มุ่งเน้นการทำเกษตรอินทรีย์
              ซึ่งเป็นวิธีการเกษตรที่ไม่ใช้สารเคมี
              และมุ่งเน้นความยั่งยืนในการจัดการทรัพยากรธรรมชาติ
              ซึ่งเป็นวิถีชีวิตที่ยังคงได้รับความนิยมในปัจจุบันโดยมีนายสมัย
              สีใสเป็นผู้ดูแลศูนย์เรียนรู้เกษตรอินทรีย์ PGS
              ซึ่งเป็นผู้มีความรู้ความสามารถทางด้านการทำเกษตรอินทรีย์
              และมีความมุ่งมั่นในการสร้างความเข้มแข็งให้กับชุมชนในพื้นที่
              ในศูนย์เรียนรู้เกษตรอินทรีย์ PGS
              มีการปฏิบัติการทำเกษตรอินทรีย์โดยใช้วิธีการปลูกพืชและเลี้ยงสัตว์ที่ไม่ใช้สารเคมี
              นอกจากนี้ยังมีการใช้พลังงานแสงอาทิตย์ในการเผาผลาญหรืออบแห้งผลผลิต
              และมีการแปรรูปผลิตภัณฑ์เกษตรอินทรีย์ด้วยโรงอบแสดงอาทิตย์
              เพื่อเพิ่มมูลค่าให้กับผลผลิตและช่วยสร้างรายได้ให้กับครัวเรือน
            </p>
            <Col sm={4} className="mb-4">
              <Image
                src="/pronjarean/img3.png"
                width={1156}
                height={651}
                className="img-fluid rounded-5 unselectable"
                alt="inside-village"
                loading="lazy"
              />
            </Col>
            <Col sm={4} className="mb-4">
              <Image
                src="/pronjarean/img4.png"
                width={1156}
                height={651}
                className="img-fluid rounded-5 unselectable"
                alt="inside-village"
                loading="lazy"
              />
            </Col>
            <Col sm={4} className="mb-4">
              <Image
                src="/pronjarean/img5.png"
                width={1156}
                height={651}
                className="img-fluid rounded-5 unselectable"
                alt="inside-village"
                loading="lazy"
              />
            </Col>
            <p>
              นอกจากการปลูกพืชและเลี้ยงสัตว์ที่ไม่ใช้สารเคมีแล้ว
              ศูนย์เรียนรู้เกษตรอินทรีย์ PGS ยังมีการเลี้ยงหมู่ป่าและควาย
              เพื่อสนับสนุนการทำเกษตรอินทรีย์โดยการใช้พลังงานของสัตว์ที่เลี้ยงอยู่ในศูนย์
              เช่นการใช้ปุ๋ยธรรมชาติจากการเลี้ยงหมู่ป่าและการใช้ควายเพื่อเก็บเกี่ยวและขนส่งผลผลิต
              ซึ่งเป็นวิธีการทำเกษตรที่มีรายได้สูงและมีความยั่งยืนต่อไปได้นาน
            </p>
            <Col sm={3} className="mb-4">
              <Image
                src="/pronjarean/img6.png"
                width={1156}
                height={651}
                className="img-fluid rounded-5 unselectable"
                alt="inside-village"
                loading="lazy"
              />
            </Col>
            <Col sm={3} className="mb-4">
              <Image
                src="/pronjarean/img7.png"
                width={1156}
                height={651}
                className="img-fluid rounded-5 unselectable"
                alt="inside-village"
                loading="lazy"
              />
            </Col>
            <Col sm={3} className="mb-4">
              <Image
                src="/pronjarean/img8.png"
                width={1156}
                height={651}
                className="img-fluid rounded-5 unselectable"
                alt="inside-village"
                loading="lazy"
              />
            </Col>
            <Col sm={3} className="mb-4">
              <Image
                src="/pronjarean/img9.png"
                width={1156}
                height={651}
                className="img-fluid rounded-5 unselectable"
                alt="inside-village"
                loading="lazy"
              />
            </Col>
            <p>
              ในด้านเทคโนโลยีทางการเกษตรมีการใช้เครื่องจักรทางการเกษตรเข้าช่วยในการดำเนินการภายในศูนย์รวมถึงได้รับการสนับสนุนโรงอบแห้งพลังงานแสงอาทิตย์จากโครงการ
              u2t เพื่อใช้ในการแปรรูปผลิตภันฑ์
              เพื่อเพิ่มมูลค่าให้กับผลผลิตและช่วยสร้างรายได้ให้กับครัวเรือน
            </p>
          </Row>

          {/* map */}
          <iframe
            className="rounded-5"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15172.745134498964!2d103.714519!3d18.062929!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313b31ee4f176d4d%3A0x44a95b3380ac052c!2z4LiZ4Liy4LmB4Lib4Lil4LiH4LmD4Lir4LiN4LmI4oCL4Lie4LmI4Lit4Liq4Lih4Lix4Lii4oCLIOC4nuC4o-C5gOC4iOC4o-C4tOC4jQ!5e0!3m2!1sth!2sth!4v1687532951717!5m2!1sth!2sth"
            width="100%"
            height="450"
            // style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Container>
      </motion.div>
    </>
  );
}
