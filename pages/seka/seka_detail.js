import { Container } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap, faPhone, faClock } from "@fortawesome/free-solid-svg-icons";

export default function seka_detail() {
  return (
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
            <p className="pe-4 text-light text-shadow">
              ศูนย์เรียนรู้เกษตรนาเฮา (NAHAO)
              เป็นสถานที่ที่คนสามารถเรียนรู้เกี่ยวกับการทำเกษตรอินทรีย์และผลิตภัณฑ์ข้าวในบ้านดงไร่
              อำเภอเซกา จังหวัดบึงกาฬ นอกจากการทำข้าวแล้ว
              ศูนย์นี้ยังมีการปลูกพืชผักสมุนไพรหลายชนิด
              และเปิดให้ผู้มาเยี่ยมชมได้สัมผัสและชิมผลิตภัณฑ์ต่างๆ
            </p>
          </div>
        </div>
      </div>
      <div className="bg-body p-5 my-5 shadow rounded-5">
        <Row>
          <Col sm={3}>
            <div className="text-center">
              <div style={{ height: "60px" }}>
                <FontAwesomeIcon icon={faMap} className="text-danger fs-1" />
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
    </Container>
  );
}
