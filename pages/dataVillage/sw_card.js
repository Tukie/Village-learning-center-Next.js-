import { Container } from "react-bootstrap"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap, faPhone, faClock } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function Sw_card() {
    return (
        <>
            <Container sm className="my-5 ">
                <div className="rounded-5 overflow-hidden shadow">
                    <div className="bg-imageSw p-5 d-flex flex-column align-content-center justify-content-end" style={{ height: '500px' }}>
                        <div>
                            <Link href='/sriwilai_detail' className="fw-bold bg-light text-center p-2 rounded-5 btn btn-light mb-3 fs-4" >ศูนย์เรียนรู้การลดต้นทุนและเพิ่มประสิทธิภาพการผลิตยางพารา</Link>
                            <p className="pe-4 text-light text-shadow" >ศูนย์เรียนรู้เกษตรอินทรีย์ PGS ตั้งอยู่ที่ตำบลพรเจริญ อำเภอพรเจริญ จังหวัดบึงกาฬ เป็นศูนย์เรียนรู้ที่มุ่งเน้นการทำเกษตรอินทรีย์ ซึ่งเป็นวิธีการเกษตรที่ไม่ใช้สารเคมี และมุ่งเน้นความยั่งยืนในการจัดการทรัพยากรธรรมชาติ ซึ่งเป็นวิถีชีวิตที่ยังคงได้รับความนิยมในปัจจุบันโดยมีนายสมัย สีใสเป็นผู้ดูแลศูนย์เรียนรู้
                            </p>
                        </div>
                    </div>
                    <div className="bg-body p-5 ">
                        <Row>
                            <Col sm={3}>
                                <div className="text-center">
                                    <div style={{ height: '60px' }}>
                                        <FontAwesomeIcon icon={faMap} className="text-danger fs-1" />
                                    </div>
                                    <h5 className="fw-bold">ที่ตั้งศูนย์</h5>
                                    <p>ชุมภูพร อำเภอ ศรีวิไล บึงกาฬ 38220</p>
                                </div>
                            </Col>
                            <Col sm={3}>
                                <div className="text-center">
                                    <div style={{ height: '60px' }}>
                                        <Image src="/sriwilai/profile.jpg" width={0} height={0} sizes="100vw" style={{ width: '45px', height: '45px', objectFit: 'cover' }} className="rounded-circle " alt="profile"></Image>
                                    </div>
                                    <h5 className="fw-bold">ผู้ดูแลศุนย์</h5>
                                    <p>นายประสิทธิ์ แสงจันทร์</p>
                                </div>
                            </Col>
                            <Col sm={3}>
                                <div className="text-center">
                                    <div style={{ height: '60px' }}>
                                        <FontAwesomeIcon icon={faPhone} className="text-success fs-1 mb-3" />
                                    </div>
                                    <h5 className="fw-bold">ติดต่อ</h5>
                                    <p>โทร. 0862728963</p>
                                </div>
                            </Col>
                            <Col sm={3}>
                                <div className="text-center">
                                    <div style={{ height: '60px' }}>
                                        <FontAwesomeIcon icon={faClock} className="text-secondary fs-1 mb-3" />
                                    </div>
                                    <h5 className="fw-bold">เวลาทำการ</h5>
                                    <p>09.00 - 17.00 น.</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div >

            </Container >
        </>
    )
}