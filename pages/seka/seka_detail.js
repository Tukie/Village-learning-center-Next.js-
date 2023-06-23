import { Container } from "react-bootstrap";
import Image from "next/image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap, faPhone, faClock } from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";
import { motion } from "framer-motion";

export default function seka_detail() {
  return (
    <>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Head>
          <title>ศูนย์เรียนรู้เกษตรนาเฮา (NAHAO)</title>
        </Head>

        <Container sm className="my-5">
          <div className="rounded-5 overflow-hidden shadow">
            <div
              className="bg-imageSk p-5 d-flex flex-column align-content-center justify-content-end"
              style={{ height: "500px" }}
            >
              <div>
                <p
                  href="/seka_detail"
                  className="fw-bold bg-light text-center p-2 rounded-5 btn btn-light mb-3 fs-4"
                >
                  ศูนย์เรียนรู้เกษตรนาเฮา (NAHAO)
                </p>
                </div>

                <div className="d-inline-block">
                  <div className="d-inline-block">
                    <div className="d-flex rounded-pill bg-light py-2 ps-2 pe-4">
                      <Image
                        src="/seka/profile.jpg  "
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
                        <p className="text-primary fw-bold m-0">
                          นางสาวแพรวพรรณ จันทร์โคตร
                        </p>
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
                  <p>บ้านดงไร่ เซกาตำบล เซกา อำเภอ เซกา บึงกาฬ 38220</p>
                </div>
              </Col>
              <Col sm={3}>
                <div className="text-center">
                  <div style={{ height: "60px" }}>
                    <Image
                      src="/seka/profile.jpg"
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
                  <p>นางสาวแพรวพรรณ จันทร์โคตร</p>
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
                  <p>โทร. 0890606087</p>
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
                  <p>09.00 - 17.00 น.</p>
                </div>
              </Col>
            </Row>
          </div>

          {/* Content */}

          <Row className="my-5">
            <Col sm={6} className="mb-4">
              <Image
                src="/seka/img7.png"
                width={1156}
                height={651}
                className="img-fluid rounded-5 unselectable"
                alt="sign"
                loading="lazy"
              />
            </Col>
            <Col sm={6} className="mb-4">
              <Image
                src="/seka/img8.jpg"
                width={1156}
                height={651}
                className="img-fluid rounded-5 unselectable"
                alt="inside-village"
                loading="lazy"
              />
            </Col>
            <p>
              ศูนย์เรียนรู้เกษตรนาเฮา (NAHAO)
              เป็นสถานที่ที่คนสามารถเรียนรู้เกี่ยวกับการทำเกษตรอินทรีย์และผลิตภัณฑ์ข้าวในบ้านดงไร่
              อำเภอเซกา จังหวัดบึงกาฬ นอกจากการทำข้าวแล้ว
              ศูนย์นี้ยังมีการปลูกพืชผักสมุนไพรหลายชนิด
              และเปิดให้ผู้มาเยี่ยมชมได้สัมผั
            </p>
            <Col sm={4} className="mb-4">
              <Image
                src="/seka/img1.png"
                width={1156}
                height={651}
                className="img-fluid rounded-5 unselectable"
                alt="sign"
                loading="lazy"
              />
            </Col>
            <Col sm={4} className="mb-4">
              <Image
                src="/seka/img9.png"
                width={1156}
                height={651}
                className="img-fluid rounded-5 unselectable"
                alt="inside-village"
                loading="lazy"
              />
            </Col>
            <Col sm={4} className="mb-4">
              <Image
                src="/seka/img10.png"
                width={1156}
                height={651}
                className="img-fluid rounded-5 unselectable"
                alt="inside-village"
                loading="lazy"
              />
            </Col>
            <p>
              หนึ่งในผลิตภัณฑ์ของ NAHAO คือดินปลูก
              ที่ผลิตจากการหมักสารอินทรีย์จากพืชผักและขี้ไส้เดือน ดินปลูกของ
              NAHAO มีคุณสมบัติที่ดี เหมาะสำหรับการปลูกผักอินทรีย์ ไม่มีสารพิษ
              ไม่มีโรคและแมลง และมีธาตุอาหารที่จำเป็นสำหรับพืชผัก
            </p>
            <Col sm={6} className="mb-4">
              <Image
                src="/seka/img4.png"
                width={1156}
                height={651}
                className="img-fluid rounded-5 unselectable"
                alt="inside-village"
                loading="lazy"
              />
            </Col>
            <Col sm={6} className="mb-4">
              <Image
                src="/seka/img11.png"
                width={1156}
                height={651}
                className="img-fluid rounded-5 unselectable"
                alt="inside-village"
                loading="lazy"
              />
            </Col>
            <p>
              นอกจากนี้ยังมีชาผักแขยง
              โดยเป็นการนำผักแขยงมาแปรรูปผลิตภัณฑ์ในรูปแบบผงชา
              ชาผักแขยงมีสรรพคุณที่ดีต่อสุขภาพ เช่น
              ช่วยลดความเสี่ยงของโรคเบาหวาน ลดความดันโลหิตสูง
              และเสริมสร้างภูมิคุ้มกัน
              การดื่มชาผักแขยงจึงเป็นทางเลือกที่ดีสำหรับผู้ที่ต้องการดูแลสุขภาพ
            </p>
            <Col sm={12} className="mb-4">
              <Image
                src="/seka/img3.png"
                width={1156}
                height={651}
                className="img-fluid rounded-5 unselectable"
                alt="inside-village"
                loading="lazy"
              />
            </Col>
            <p>
              รวมถึงผลิตภัณฑ์จากข้าวที่มีทั้งข้าวดกล้องซึ่งมีคุณประโยชน์ในการกระตุ้นระบบขับถ่าย
              ป้องกันมะเร็งลำไส้ใหญ่และทวารหนัก และป้องกันโรคต่างๆ
              และผลิตภัณฑ์จากข้าวอีกชนิดหนึ่งคือข้าวบด
              ซึ่งมีกลุ่มเป้าหมายเพื่อให้ผู้สูงอายุในการรับประทาน
              เพื่อช่วยให้เป็นประโยชน์ต่อร่างกาย
            </p>
          </Row>

          <iframe
            className="rounded-5"
            src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3796.270930757322!2d103.939999!3d17.919513000000002!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDU1JzEwLjIiTiAxMDPCsDU2JzI4LjYiRQ!5e0!3m2!1sth!2sth!4v1687535950697!5m2!1sth!2sth"
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
