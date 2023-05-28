import { Container, Carousel } from "react-bootstrap";
import Link from "next/link";

export default function Sw_slide() {
    return (
        <>
            <Container sm className="py-5">
                <Container sm className="text-center">
                    <h1 className="fw-bold text_m1">
                        ศูนย์เรียนรู้ชุมชนอำเภอศรีวิไล
                    </h1>
                    <p className="my-4 w-75 m-auto">
                        ศูนย์เรียนรู้การลดต้นทุนและเพิ่มประสิทธิภาพการผลิตยางพาราที่ตั้งอยู่บ้านชมภูทอง อำเภอศรีวิไล จังหวัดบึงกาฬ เป็นศูนย์เรียนรู้ชุมชนที่เกี่ยวข้องกับการผลิตยางพาราอย่างใกล้ชิด โดยเน้นการนำเสนอแนวคิดและเทคโนโลยีที่ทันสมัยเพื่อช่วยเพิ่มประสิทธิภาพในการผลิตยางพารา อีกทั้งยังเน้นการลดต้นทุนในการผลิตด้วยวิธีการที่เป็นมิตรต่อสิ่งแวดล้อม
                    </p>
                </Container>
                <div className="rounded-5 my-5 overflow-hidden">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="/sriwilai/1.jpg"
                                alt="Sriwilai slide 1"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="/sriwilai/2.jpg"
                                alt="Sriwilai slide 2"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="/sriwilai/3.jpg"
                                alt="Sriwilai slide 3"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="/sriwilai/4.jpg"
                                alt="Sriwilai slide 4"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="/sriwilai/5.jpg"
                                alt="Sriwilai slide 5"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div >
                <center>
                    <Link href='/sriwilai/sriwilai_detail' className="btn btn-light btn-lg rounded-5 text-light m1 fw-bold ">ดูเพิ่มเติม</Link>
                </center>
            </Container>
        </>
    )
}