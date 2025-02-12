import React from "react";
import { Link } from "react-router-dom";
import test from './assets/mainlogo.png';
import HeaderBanner from './components/HeaderBanner'; // Adjust the import path as necessary
const Home = () => {
  return (
    <>

      <div className="container-fluid border-0 p-0" style={{ background: "#F5F6F6" }}>
        <div className="container border-0 py-1 p-1">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png"
            alt="logo"
            style={{ width: "10rem", height: "10rem" }}
          />
        </div>
      </div>
      <HeaderBanner />
      <div className="d-flex justify-content-center mt-5">
        <div className="col-sm-6 mt-5 ms-5">
          <img
            src="https://www.91-cdn.com/pricebaba-blogimages/wp-content/uploads/2023/02/Meta-Verified-Tick.jpg"
            alt="meta"
            style={{ width: "6rem", height: "6rem" }}
          />
          <h1 className="my-3 fs-1">
          Stand out with Meta  <br /> Verified
          </h1>

          {/* Add 3 more spaces (adjust the marginBottom value as needed) */}
          <div style={{ marginBottom: "30px" }}></div>

          <Link
            to="/validation"
            className="border-0 text-white text-decoration-none"
            style={{
              background: "#0064e0",
              borderRadius: "100px",
              padding: "10px 35px",
            }}
          >
            Apply
          </Link>

          <p style={{ fontSize: "18px" }} className="mt-4">
          Meta Verified is a subscription bundle for creators and <br />
          businesses that helps you show the world your profile is <br />
          authentic and build credibility with your audience.
          </p>

          <p className="py-3" style={{ fontSize: '17px' }}>
          Sign up now

          </p>

          <p className="mt-4 mb-0">
            <span className="fw-semibold">Are you a business?</span> Get more
            information on
          </p>
          <Link style={{ fontSize: '14px' }}>
            Meta verified for businesses
          </Link>

          <p className="mt-4 font-italic" style={{ fontSize: "13px" }}>
            Features, availability, and pricing may vary by region.
          </p>
        </div>

        <div
          className="col-sm-5 d-none d-sm-block img-smal order-2 img-fluid"
          /* Show on larger screens */
          style={{
            backgroundImage: `url(${test})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
    </>
  );
};

export default Home;
