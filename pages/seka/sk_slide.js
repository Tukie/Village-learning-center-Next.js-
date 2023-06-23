import { Container, Carousel } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

export default function Sk_slide() {
  return (
    <>
      <Container fluid className="py-5">
        <Container sm className="text-center">
          <h1 className="fw-bold text_m1">ศูนย์เรียนรู้ชุมชนอำเภอเซกา</h1>
          <p className="my-4 w-75 m-auto">
            ศูนย์เรียนรู้เกษตรนาเฮา (NAHAO)
            เป็นสถานที่ที่คนสามารถเรียนรู้เกี่ยวกับการทำเกษตรอินทรีย์และผลิตภัณฑ์ข้าวในบ้านดงไร่
            อำเภอเซกา จังหวัดบึงกาฬ นอกจากการทำข้าวแล้ว
            ศูนย์นี้ยังมีการปลูกพืชผักสมุนไพรหลายชนิด
            และเปิดให้ผู้มาเยี่ยมชมได้สัมผัสและชิมผลิตภัณฑ์ต่างๆ
          </p>

          <div className="rounded-5 my-5 overflow-hidden position-relative">
            <Carousel>
              <Carousel.Item>
              <Image
                  width={900}
                  height={390}
                  className="d-block w-100 img-fluid"
                  src="/seka/1.png"
                  alt="seka slide 1"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  width={900}
                  height={390}
                  className="d-block w-100 img-fluid"
                  src="/seka/2.png"
                  alt="seka slide 2"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  width={900}
                  height={390}
                  className="d-block w-100 img-fluid"
                  src="/seka/3.png"
                  alt="seka slide 3"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  width={900}
                  height={390}
                  className="d-block w-100 img-fluid"
                  src="/seka/4.png"
                  alt="seka slide 4"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  width={900}
                  height={390}
                  className="d-block w-100 img-fluid"
                  src="/seka/5.png"
                  alt="seka slide 5"
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <center>
            <Link
              href="/seka/seka_detail"
              className="btn btn-lg btn-light rounded-5 m1 text-light fw-bold "
            >
              ดูเพิ่มเติม
            </Link>
          </center>
        </Container>
      </Container>
    </>
  );
}
