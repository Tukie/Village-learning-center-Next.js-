import { Container } from "react-bootstrap";
import Image from "next/image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap, faPhone, faClock } from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";
import { motion } from "framer-motion";

export default function sriwilai_detail() {
  return (
    <>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Head>
          <title>
            ศูนย์เรียนรู้การลดต้นทุนและเพิ่มประสิทธิภาพการผลิตยางพารา
          </title>
        </Head>

        <Container sm className="my-5">
          <div className="rounded-5 overflow-hidden shadow">
            <div
              className="bg-imageSw p-5 d-flex flex-column align-content-center justify-content-end"
              style={{ height: "500px" }}
            >
              <div>
                <p
                  href="/sriwilai_detail"
                  className="fw-bold bg-light text-center p-2 rounded-5 mb-3 btn btn-light fs-4"
                >
                  ศูนย์เรียนรู้การลดต้นทุนและเพิ่มประสิทธิภาพการผลิตยางพารา
                </p>
              </div>
              <div className="d-inline-block">
                <div className="d-inline-block">
                  <div className="d-flex rounded-pill bg-light py-2 ps-2 pe-4">
                    <Image
                      src="/sriwilai/profile.jpg"
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
                        นายประสิทธิ์ แสงจันทร์
                      </p>
                      <p className="m-0">ผู้ดูแลศุนย์</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-body p-5 shadow rounded-5 my-5">
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
                  <p>ชุมภูพร อำเภอ ศรีวิไล บึงกาฬ 38220</p>
                </div>
              </Col>
              <Col sm={3}>
                <div className="text-center">
                  <div style={{ height: "60px" }}>
                    <Image
                      src="/sriwilai/profile.jpg"
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
                  <p>นายประสิทธิ์ แสงจันทร์</p>
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
                  <p>โทร. 0862728963</p>
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
            <Col sm={12} className="mb-4">
              <Image
                src="/sriwilai/img1.jpg"
                width={1156}
                height={651}
                className="img-fluid rounded-5 unselectable"
                alt="sign"
                loading="lazy"
              />
            </Col>
            <p>
              ศูนย์เรียนรู้การลดต้นทุนและเพิ่มประสิทธิภาพการผลิตยางพาราที่ตั้งอยู่บ้านชมภูทอง
              อำเภอศรีวิไล จังหวัดบึงกาฬ
              เป็นศูนย์เรียนรู้ชุมชนที่เกี่ยวข้องกับการผลิตยางพาราอย่างใกล้ชิด
              โดยเน้นการนำเสนอแนวคิดและเทคโนโลยีที่ทันสมัยเพื่อช่วยเพิ่มประสิทธิภาพในการผลิตยางพารา
              อีกทั้งยังเน้นการลดต้นทุนในการผลิตด้วยวิธีการที่เป็นมิตรต่อสิ่งแวดล้อม
              และพัฒนาคุณภาพชีวิตของชุมชนในบริเวณใกล้เคียง
              ซึ่งนับว่าเป็นการอนุรักษ์และพัฒนาทรัพยากรของชุมชนท้องถิ่นไปในทางที่เป็นประโยชน์ต่อระบบเศรษฐกิจท้องถิ่นได้อย่างมีประสิทธิภาพ
              โดยมีนายประสิทธิ์
              แสงจันทร์เป็นผู้ดูแลศูนย์เรียนรู้ดังกล่าวและมีหน้าที่เป็นผู้นำและแนะนำแนวคิดใหม่ๆให้กับชุมชนในบริเวณนั้นๆ
            </p>
            <Col sm={6} className="mb-4">
              <Image
                src="/sriwilai/img3.jpg"
                width={1156}
                height={651}
                className="img-fluid rounded-5 unselectable"
                alt="inside-village"
                loading="lazy"
              />
            </Col>
            <Col sm={6} className="mb-4">
              <Image
                src="/sriwilai/img4.jpg"
                width={1156}
                height={651}
                className="img-fluid rounded-5 unselectable"
                alt="inside-village"
                loading="lazy"
              />
            </Col>
            <p>
              นอกจากการนำเสนอแนวคิดและเทคโนโลยีใหม่ๆ
              ที่เป็นประโยชน์ต่อการผลิตยางพาราแล้ว
              ศูนย์เรียนรู้การลดต้นทุนและเพิ่มประสิทธิภาพการผลิตยางพาราที่ตั้งอยู่ในบ้านชมภูทอง
              อำเภอศรีวิไล
              จังหวัดบึงกาฬยังมีเตาเผาถ่านที่สามารถแปรรูปไม้ยางพาราให้กลายเป็นถ่านได้
            </p>
            <Col sm={6} className="mb-4">
              <Image
                src="/sriwilai/img5.jpg"
                width={1156}
                height={651}
                className="img-fluid rounded-5 unselectable"
                alt="inside-village"
                loading="lazy"
              />
            </Col>
            <Col sm={6} className="mb-4">
              <Image
                src="/sriwilai/img6.jpg"
                width={1156}
                height={651}
                className="img-fluid rounded-5 unselectable"
                alt="inside-village"
                loading="lazy"
              />
            </Col>
            <p>
              ซึ่งถ่านที่ได้จากเตาเผาถ่านนี้สามารถนำไปจำหน่ายได้
              เป็นการใช้ทรัพยากรไม้ยางพาราอย่างมีประสิทธิภาพ
              และช่วยเพิ่มรายได้ให้กับชุมชนในบริเวณนั้นๆ
              อีกทั้งยังช่วยลดปัญหาสิ่งแวดล้อมที่เกิดจากการใช้ไม้ยางพาราในการเผาไฟหรือใช้เป็นเชื้อเพลิงในการผลิต
              โดยทำให้ชุมชนนั้นมีความมั่นคงในการอนุรักษ์และพัฒนาทรัพยากรธรรมชาติอย่างยั่งยืน
            </p>
            <Col sm={6} className="mb-4">
              <Image
                src="/sriwilai/img7.jpg"
                width={1156}
                height={651}
                className="img-fluid rounded-5 unselectable"
                alt="inside-village"
                loading="lazy"
              />
            </Col>
            <Col sm={6} className="mb-4">
              <Image
                src="/sriwilai/img8.jpg"
                width={1156}
                height={651}
                className="img-fluid rounded-5 unselectable"
                alt="inside-village"
                loading="lazy"
              />
            </Col>
            <p>
              ฐานพึ้งโพรง คือ
              ส่วนที่เชื่อมต่อระหว่างโพรงสร้างกับพื้นหรือดินหรือแนวรอบโพรงสร้าง
              เป็นส่วนที่รับน้ำหนักและแรงต่างๆ
              ที่มาจากโพรงสร้างแล้วส่งต่อให้กับพื้นหรือดิน
              เพื่อให้โพรงสร้างมีความมั่นคงและปลอดภัย
              การเลี้ยงผึ้งโพรงเป็นกิจกรรมที่มีประโยชน์และมีความสำคัญในทางการเกษตร
              โดยมีข้อดีหลาย เช่น ช่วยในการผสมเกสรของพืช
              เป็นตัวช่วยในการผสมพันธุ์พืช
            </p>
            <Col sm={6} className="mb-4">
              <Image
                src="/sriwilai/img9.jpg"
                width={1156}
                height={651}
                className="img-fluid rounded-5 unselectable"
                alt="inside-village"
                loading="lazy"
              />
            </Col>
            <Col sm={6} className="mb-4">
              <Image
                src="/sriwilai/img10.jpg"
                width={1156}
                height={651}
                className="img-fluid rounded-5 unselectable"
                alt="inside-village"
                loading="lazy"
              />
            </Col>
            <p>
              ฐานพลังงานแสงอาทิตย์คือ
              การใช้พลังงานจากแสงอาทิตย์เพื่อผลิตไฟฟ้าหรืออุปกรณ์ต่างๆ
              โดยอาศัยการแปลงแสงอาทิตย์เป็นพลังงานไฟฟ้าหรืออุณหภูมิที่ใช้งานได้
              เช่น แผงโซลาร์เซลล์
              หรือตัวกลางที่ใช้ในการกระจายไฟฟ้าจากแผงโซลาร์เซลล์ เป็นต้น
              การใช้ฐานพลังงานแสงอาทิตย์ในทางเกษตรมีข้อดีมากมาย เช่น
              ลดต้นทุนการใช้พลังงานไฟฟ้าจากการไฟฟ้าฯ ที่อาจมีการเพิ่มขึ้นเรื่อยๆ
              ในอนาคต
              ลดการใช้พลังงานที่มาจากแหล่งพลังงานที่มีผลกระทบต่อสิ่งแวดล้อม เช่น
              น้ำมันหรือถ่านหิน
              และยังช่วยให้เกษตรกรสามารถควบคุมต้นทุนการผลิตได้อย่างมีประสิทธิภาพ
            </p>
            <Col sm={6} className="mb-4">
              <Image
                src="/sriwilai/img11.jpg"
                width={1156}
                height={651}
                className="img-fluid rounded-5 unselectable"
                alt="inside-village"
                loading="lazy"
              />
            </Col>
            <Col sm={6} className="mb-4">
              <Image
                src="/sriwilai/img12.jpg"
                width={1156}
                height={651}
                className="img-fluid rounded-5 unselectable"
                alt="inside-village"
                loading="lazy"
              />
            </Col>
            <p>
              ฐานปุ๋ยหมักคือ
              สารอินทรีย์ที่สร้างจากการย่อยสลายของวัสดุพื้นที่มีอยู่ เช่น
              ใบไม้ที่ร่วงลงสนาม กากใบไม้ ซากพืช รวมถึงมูลสัตว์และขยะสิ่งปฏิกูล
              เมื่อวัสดุพื้นฐานเหล่านี้ถูกย่อยสลายด้วยจุลินทรีย์ต่างๆ
              จะเกิดการสร้างฐานปุ๋ยหมักขึ้นมา
              ซึ่งเป็นแหล่งประโยชน์ในการเพิ่มประสิทธิภาพการใช้ปุ๋ยในการเกษตรการใช้ฐานปุ๋ยหมักมีข้อดีมากมาย
              ไม่เพียงแต่ช่วยลดการใช้ปุ๋ยเคมีและน้ำประปา
              ลดการสร้างสารเคมีที่อาจมีผลกระทบต่อสิ่งแวดล้อมและสุขภาพของคนและสัตว์
              เพียงน้อยกว่าปุ๋ยเคมี แต่ยังช่วยเพิ่มความอุดมสมบูรณ์ของดิน
              ช่วยกระตุ้นการเจริญเติบโตของต้นไม้และพืชทั่วไป
              และช่วยสร้างสภาพแวดล้อมที่เหมาะสมสำหรับการเจริญเติบโตของพืชในระยะยาว
              นอกจากนี้
              การใช้ฐานปุ๋ยหมักยังช่วยป้องกันการแพร่กระจายของโรคและแมลงศัตรูพืชที่อาจเกิดขึ้นในพืช
            </p>
          </Row>

          {/* map */}
          <iframe
            className="rounded-5"
            src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d473.9219053606691!2d103.767003!3d18.14662!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDA4JzQ3LjciTiAxMDPCsDQ2JzAxLjciRQ!5e0!3m2!1sth!2sth!4v1687533619416!5m2!1sth!2sth"
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
