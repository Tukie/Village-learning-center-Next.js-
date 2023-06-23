import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import Head from "next/head";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from "sweetalert2";

export default function Contact() {
  function resetClass() {
    const inputs = document.querySelectorAll("input, textarea");
    inputs.forEach((input) => {
        input.classList.remove("is-valid");
      });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const inputs = form.querySelectorAll("input, textarea");

    let isEmpty = false;
    inputs.forEach((input) => {
      if (input.value.trim() === "") {
        isEmpty = true;
        input.classList.add("is-invalid");
      } else {
        input.classList.add("is-valid");
      }
      input.addEventListener("focus", () => {
        input.classList.remove("is-invalid");
        input.classList.remove("is-valid");
      });
    });

    if (isEmpty) {
      event.preventDefault();
    } else {
      // Submit the form or perform other actions
      const formData = new FormData(event.target);

      formData.append("access_key", "6ced7481-34c8-4e74-87b6-cfceb48ce7ab");

      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      const result = await response.json();
      if (result.success) {
        console.log(result);
        Swal.fire({
          title: "Success",
          text: "Message has been sent!",
          icon: "success",
          confirmButtonText: "Close",
        });
        form.reset();
        resetClass();
      }else{
        Swal.fire({
            title: "Error",
            text: "Connot sent message",
            icon: "error",
            confirmButtonText: "Close",
          });
      }
    }
  }

  return (
    <>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Head>
          <title>ติดต่อเรา</title>
        </Head>
        <Container
          sm
          style={{ height: "90vh" }}
          className="d-flex justify-content-center align-items-center"
        >
          <div className="w-75">
            <h1 className="fw-bold text-center mb-4">ติดต่อเรา</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Label>ชื่อ - นามสกุล (Name - Lastname)</Form.Label>
              <Form.Control
                type="text"
                placeholder="First name"
                name="name"
                className="mb-4"
              />
              <Form.Label>อีเมลล์ E-mail</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="email"
                name="email"
                className="mb-4"
              />
              <Form.Label>ข้อความ (Message)</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="message"
                name="message"
                className="mb-4"
                rows={5}
              />

              <div className="text-center">
                <Button type="submit" className="btn btn-success">
                  <FontAwesomeIcon icon={faPaperPlane} /> ส่งข้อความ (Sent)
                </Button>
              </div>
            </Form>
          </div>
        </Container>
      </motion.div>
    </>
  );
}
