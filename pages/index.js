import Link from "next/link";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf, faAddressBook } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";
import Image from "next/image";
import Sw_slide from "./sriwilai/sw_silde";
import Pr_slide from "./pronjarean/pr_slide";
import Sk_slide from "./seka/sk_slide";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Head>
          <title>ศูนย์เรียนรู้ชุมชนจังหวัดบึงกาฬ</title>
        </Head>

        <div className="vdo_bg">
          <video
            src="/bg-banner.mp4"
            type="video/mp4"
            autoPlay
            loop
            muted
            className="vdo_main"
          ></video>
        </div>
        <div className=" position-absolute mt-lg-0 mt-5 top-0 w-100 text-center">
          <div className="text-light d-flex flex-column justify-content-center align-items-center vdo_bg">
            <h1 className="display-1 fw-bold mb-5">
              ศูนย์เรียนรู้ชุมชนจังหวัดบึงกาฬ
            </h1>
            <p className=" w-75 mb-5">
              เว็บไซต์นี้เป็นเว็บไซต์รวมศูนย์เรียนรู้ชุมชนจังหวัดบึงกาฬ
              ที่มีวัตถุประสงค์เพื่อเผยแพร่ข้อมูลและความรู้ที่เป็นประโยชน์ต่อผู้ที่สนใจ
              ไม่ว่าจะเป็นเรื่องการศึกษา การส่งเสริมสุขภาพ การพัฒนาท้องถิ่น
              หรือการสร้างสังคมที่ยั่งยืน
            </p>
            <div className="d-flex flex-column flex-sm-row">
              <Link
                href="/doc.pdf"
                target="_blank"
                className="btn btn-light btn-lg rounded-5 mb-2 mx-3 fw-bold"
                style={{ width: "170px" }}
              >
                <FontAwesomeIcon icon={faFilePdf} /> โหลดเอกสาร
              </Link>
              <Link
                href="/search"
                className="btn btn-light btn-lg rounded-5 mb-2 mx-3 fw-bold"
                style={{ width: "170px" }}
              >
                <FontAwesomeIcon icon={faMagnifyingGlass} /> ศูนย์เรียนรู้
              </Link>
              <Link
                href="/form"
                className="btn btn-light btn-lg rounded-5 mb-2 mx-3 fw-bold"
                style={{ width: "170px" }}
              >
                <FontAwesomeIcon icon={faAddressBook} /> ติดต่อเรา
              </Link>
            </div>
          </div>
        </div>

        <Container sm className="bg-body my-5">
          <Row>
            <Col xl={6}>
              <Image
                src="https://district.cdd.go.th/kochan/wp-content/uploads/sites/111/2021/05/unnamed.png"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                className="rounded-5"
                alt="village"
              />
            </Col>
            <Col xl={6}>
              <div className="mx-lg-5">
                <h1 className="fw-bold my-4 text-center text-md-start">
                  ศูนย์เรียนรู้ชุมชน
                </h1>
                <p className="overflow-auto">
                  ศูนย์เรียนรู้ชุมชน (Community Learning Center)
                  เป็นสถานที่ที่สร้างขึ้นเพื่อเสริมสร้างการเรียนรู้และพัฒนาทักษะของชุมชนในพื้นที่นั้นๆ
                  โดยมุ่งเน้นการเรียนรู้ที่เกี่ยวข้องกับการแก้ไขปัญหาและพัฒนาความสามารถในชีวิตประจำวัน
                  โดยเฉพาะอย่างยิ่งในการพัฒนาทักษะทางอาชีพและการเตรียมความพร้อมสำหรับการทำงานในอนาคต
                  ศูนย์เรียนรู้ชุมชนสามารถเป็นที่เรียนรู้แบบอยู่ร่วมกันของชุมชนในแต่ละพื้นที่
                  ที่นักเรียนสามารถเข้าเรียนได้ฟรีหรือเสียค่าใช้จ่ายต่ำกว่าเรียนในสถาบันการศึกษาเอกชน
                  นอกจากนี้ยังสามารถเปิดโอกาสให้แก่ผู้สูงอายุ ผู้พิการ
                  และกลุ่มคนจนในชุมชนได้อีกด้วย
                </p>
              </div>
            </Col>
          </Row>
        </Container>

        <Container fluid className="text-center m1 text-light py-5">
          <Container sm>
            <h1 className="fw-bold">ศูนย์เรียนรู้ชุมชนจังหวัดบึงกาฬ</h1>
            <p className="my-4 w-75 m-auto">
              ในจังหวัดบึงกาฬมีศูนย์เรียนรู้ชุมชนหลากหลายที่สามารถเข้าถึงได้ง่าย
              แต่เว็บไซต์นี้มีการนำเสนอศูนย์เรียนรู้เด่นๆในจังหวัดเพื่อช่วยให้ผู้เยี่ยมชมได้รับการแนะนำและเลือกเยี่ยมชมเพิ่มเติม
              โดยศูนย์เรียนรู้เหล่านี้เป็นศูนย์ที่มีการจัดโครงการเรียนรู้ที่เน้นความเป็นส่วนตัวและสร้างสรรค์
            </p>
            <Button variant="warning" className="fw-bold text-light rounded-5">
              คลิกที่ปุ่มด้นล่างเพื่อเยี่ยมชม
            </Button>
            <div className="d-flex flex-column flex-md-row align-content-center justify-content-center my-5">
              <Link
                href={"/sriwilai/sriwilai_detail"}
                className="btn btn-light rounded-5 btn-lg m-2"
              >
                ศูนย์ อ.ศรีวิไล
              </Link>
              <Link
                href={"/pronjarean/pronjarean_detail"}
                className="btn btn-light rounded-5 btn-lg m-2"
              >
                ศูนย์ อ.พรเจริญ
              </Link>
              <Link
                href={"/seka/seka_detail"}
                className="btn btn-light rounded-5 btn-lg m-2"
              >
                ศูนย์ อ.เซกา
              </Link>
            </div>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7575.665666306789!2d103.6412056!3d18.3092514!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313b29fc5c007579%3A0x13a222bbfe9d0f2b!2z4Lih4Lir4Liy4Lin4Li04LiX4Lii4Liy4Lil4Lix4Lii4Lij4Liy4LiK4Lig4Lix4LiO4Lit4Li44LiU4Lij4LiY4Liy4LiZ4Li1IOC4qOC4ueC4meC4ouC5jOC4geC4suC4o-C4qOC4tuC4geC4qeC4suC4muC4tuC4h-C4geC4suC4rA!5e0!3m2!1sth!2sth!4v1684569609583!5m2!1sth!2sth"
                className="w-100 rounded-5"
                style={{ height: "500px" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Container>
        </Container>

        <Sw_slide></Sw_slide>
        <Pr_slide></Pr_slide>
        <Sk_slide></Sk_slide>
      </motion.div>
    </>
  );
}
