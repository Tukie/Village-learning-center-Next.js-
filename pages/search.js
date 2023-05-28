import { Container } from "react-bootstrap";

export default function Search() {
  return (
    <Container sm style={{ height: "68vh" }}>
      <div className="d-flex flex-column align-items-center justify-content-center h-100 ">
        <h1 className="fw-bold text-center mb-4">ค้นหาศูนย์เรียนรู้</h1>
        <p className="text-center mb-5">
          สามารถค้นหาศูนย์เรียนรู้ชมชน โครงการยกระดับเศรฐกิจและสังคมรายตำบล
          แบบบูรณาการ (1 ตำบล 1 มหาวิทยาลัย) จังหวัดบึงกาฬ
          ได้โดยการพิมพ์ที่ช่องค้นหา โดยสามารถค้นหาได้จากชื่อศูนย์เรียนรู้ ตำบล
          อำเภอ และจังหวัดที่ตั้งศูนย์เรียนรู้ชุมชน
        </p>
        <input
          type="search"
          id="search"
          className="form-control border border border-success rounded-5 text-success fw-bold w-75"
          placeholder="ชื่อศูนย์ อำเภอ ตำบล หรือ จังหวัด"
          style={{ height: "55px" }}
        />
      </div>
    </Container>
  );
}
