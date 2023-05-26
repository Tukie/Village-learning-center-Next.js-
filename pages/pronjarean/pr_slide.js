import { Container, Carousel } from "react-bootstrap";
import Link from "next/link";

export default function Pr_slide() {
    return (
        <>
            <Container fluid className="py-5 m1">
                <Container sm className="text-center text-light">
                    <h1 className="fw-bold ">
                        ศูนย์เรียนรู้ชุมชนอำเภอพรเจริญ
                    </h1>
                    <p className="my-4 w-75 m-auto">
                        ศูนย์เรียนรู้เกษตรอินทรีย์ PGS ตั้งอยู่ที่ตำบลพรเจริญ อำเภอพรเจริญ จังหวัดบึงกาฬ เป็นศูนย์เรียนรู้ที่มุ่งเน้นการทำเกษตรอินทรีย์ ซึ่งเป็นวิธีการเกษตรที่ไม่ใช้สารเคมี และมุ่งเน้นความยั่งยืนในการจัดการทรัพยากรธรรมชาติ เป็นวิถีชีวิตที่ยังคงได้รับความนิยมในปัจจุบัน
                    </p>

                    <div className="rounded-5 my-5 overflow-hidden">
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/pronjarean/1.png"
                                    alt="pronjarean slide 1"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/pronjarean/2.png"
                                    alt="pronjarean slide 2"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/pronjarean/3.png"
                                    alt="pronjarean slide 3"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/pronjarean/4.png"
                                    alt="pronjarean slide 4"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/pronjarean/5.png"
                                    alt="pronjarean slide 5"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div >
                    <center>
                        <Link href='/pronjarean_detail' className="btn btn-outline-light btn-lg rounded-5 fw-bold ">ดูเพิ่มเติม</Link>
                    </center>
                </Container>
            </Container>
        </>
    )
}