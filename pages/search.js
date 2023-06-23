import { useState } from "react";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import data from "./data.json";
import Link from "next/link";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // search
  const handleInputChange = (e) => {
    const result = document.getElementById("result");
    setSearchTerm(e.target.value);
    if (e.target.value.length > 0) {
      result.classList.remove("d-none");
      result.classList.remove("opacity-0");
      result.classList.add("opacity-100");
      const results = data
        .filter(
          (item) =>
            item.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
            item.tambol.toLowerCase().includes(e.target.value.toLowerCase()) ||
            item.district.toLowerCase().includes(e.target.value.toLowerCase())
        )
        .slice(0, 5); // Limit the results to the first 5 items
      setSearchResults(results);
    } else {
      setSearchResults([]);
      result.classList.add("d-none");
    }
  };

  return (
    <>
      <Container sm>
        <div className="d-flex flex-column align-items-center my-5">
          <h1 className="fw-bold text-center mb-4">ค้นหาศูนย์เรียนรู้</h1>
          <p className="text-center mb-5">
            สามารถค้นหาศูนย์เรียนรู้ชมชน โครงการยกระดับเศรฐกิจและสังคมรายตำบล
            แบบบูรณาการ (1 ตำบล 1 มหาวิทยาลัย) จังหวัดบึงกาฬ
            ได้โดยการพิมพ์ที่ช่องค้นหา โดยสามารถค้นหาได้จากชื่อศูนย์เรียนรู้
            ตำบล อำเภอ และจังหวัดที่ตั้งศูนย์เรียนรู้ชุมชน
          </p>
          <Form.Control
            type="text"
            placeholder="ชื่อศูนย์ อำเภอ ตำบล หรือ จังหวัด"
            value={searchTerm}
            onChange={handleInputChange}
            className="form-control border border border-success rounded-5 text-success fw-bold w-75"
            style={{ height: "55px" }}
          />

          {/* result */}
          <Container style={{ height: "250px" }}>
            <Container
              fluid
              className="shadow my-3 p-0 rounded-2 w-75 bg-light opacity-0"
              id="result"
            >
              {searchResults.length > 0 ? (
                searchResults.map((item) => (
                  <Link
                    key={item.id}
                    href={item.url}
                    className="btn btn-light py-3 w-100"
                  >
                    {item.name} - ตำบล: {item.tambol} - อำเภอ: {item.district} -
                    จังหวัด: บึงกาฬ
                  </Link>
                ))
              ) : (
                <p className="btn btn-light py-3 w-100">No data found.</p>
              )}
            </Container>
          </Container>
        </div>
      </Container>
    </>
  );
};

export default SearchPage;
