import React from "react";

import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaPrint,
  FaHome,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const Footer : React.FC  = () => (
  <>
    <footer
      className="text-center text-lg-start text-white"
      style={{ backgroundColor: "#1c2331" }}
    >
      <section
        className="d-flex justify-content-between p-4 section"
        style={{ backgroundColor: "#1E293B" }}
      >
        <div>
          <span className="footer-text">
            Get connected with us on social networks:
          </span>
        </div>

        <div>
          <a href="https://www.facebook.com/" className="text-white me-4 ">
            <FaFacebookF className="dot" />
          </a>
          <a href="https://www.twitter.com/" className="text-white me-4 ">
            <FaTwitter className="dot" />
          </a>
          <a href="https://www.google.com/" className="text-white me-4">
            <FaGoogle className="dot" />
          </a>
          <a href="https://www.instagram.com/" className="text-white me-4 ">
            <FaInstagram className="dot" />
          </a>
          <a href="https://www.linkedin.com/" className="text-white me-4">
            <FaLinkedin className="dot" />
          </a>
        </div>
      </section>

      <section>
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold footer-text">
                Cooking Discovery
              </h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{
                  width: "170px",
                  backgroundColor: "#adacaf",
                  height: "2px",
                }}
              />
              <p>
                Here you can watch many videos with our best Chefs without the
                need to worry about cooking food
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold footer-text">pages</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{
                  width: "50px",
                  backgroundColor: "#adacaf",
                  height: "2px",
                }}
              />
              <p>
                <a href="/" className="text-white">
                  Home
                </a>
              </p>
              <p>
                <a href="/recipe" className="text-white">
                  Recipe
                </a>
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold footer-text">
                Useful links
              </h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{
                  width: "105px",
                  backgroundColor: "#adacaf",
                  height: "2px",
                }}
              />
              <p>
                <a href="/" className="text-white">
                  About
                </a>
              </p>
              <p>
                <a href="/career" className="text-white">
                  career
                </a>
              </p>
              <p>
                <a href="/payment" className="text-white">
                  payment
                </a>
              </p>
            </div>
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold footer-text">Contact</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{
                  width: "70px",
                  backgroundColor: "#adacaf",
                  height: "2px",
                }}
              />
              <p>
                <i className="mr-3">
                  {" "}
                  <FaHome />
                </i>{" "}
                Robert-Bosch str.9, 79761 waldshut
              </p>
              <p>
                <i className="mr-1">
                  <FaEnvelope />
                </i>{" "}
                mohamed.soliman. mahgoob@gmail.com
              </p>
              <p>
                <i className="mr-3">
                  {" "}
                  <FaPhone />
                </i>{" "}
                015234720264
              </p>
              <p>
                <i className="mr-3">
                  {" "}
                  <FaPrint />
                </i>{" "}
                015234720264
              </p>
            </div>
          </div>
        </div>
      </section>
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2022 Copyright:
        <a className="text-white" href="http://www.facebook.com">
          Mohamed Mahgoob
        </a>
      </div>
    </footer>
  </>
);

export default Footer;
