import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMobile,
  faLocationDot,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer-section">
        <div className="container">
          <div className="footer-contact pt-5 pb-5">
            <div className="row">
              <div className="col-xl-4 col-md-4">
                <div className="contact-col d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="text-white mx-2"
                    size="xl"
                  />
                  <div className="contact-content">
                    <h5 className=" text-white">Find Us</h5>
                    <span className="fs-6">
                      1010 Avenue, sw 54321, chandigarh
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-4">
                <div className="contact-col d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={faMobile}
                    className="text-white mx-2"
                    size="xl"
                  />
                  <div className="contact-content">
                    <h5 className=" text-white">Call Us</h5>
                    <span className="fs-6">+934200000034</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-4">
                <div className="contact-col d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    size="xl"
                    className="text-white mx-2"
                  />
                  <div className="contact-content">
                    <h5 className=" text-white">Mail Us</h5>
                    <span className="fs-6">mail@info.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-content pt-5 pb-5">
            <div className="row">
              <div className="col-xl-4 col-lg-4">
                <div className="footer-content-col">
                  <div className="footer-logo mb-4">
                    <a href="/">
                      <img
                        src="assests/images/Logo.svg"
                        className="img-fluid"
                        alt="logo"
                      />
                    </a>
                  </div>
                  <div className="footer-text mb-2">
                    <p className="lh-lg fs-6">
                      Lorem ipsum dolor sit amet, consec tetur adipisicing elit,
                      sed do eiusmod tempor incididuntut consec tetur
                      adipisicing elit,Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                  <div className="footer-social-icon">
                    <span className="text-white d-block fs-5 fw-bold mb-3">
                      Follow us
                    </span>
                    <a className="fs-6 text-white mr-3" href="/">
                      <FontAwesomeIcon icon="faFacebook" />
                    </a>
                    <a className="fs-6 text-white mr-3" href="/">
                      <i className="fab fa-twitter twitter-bg" />
                    </a>
                    <a className="fs-6 text-white mr-3" href="/">
                      <i className="fab fa-google-plus-g google-bg" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="footer-content-col">
                  <div className="footer-content-heading text-white mb-5">
                    <h5>Useful Links</h5>
                  </div>
                  <ul>
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/">about</a>
                    </li>
                    <li>
                      <a href="/">services</a>
                    </li>
                    <li>
                      <a href="/">portfolio</a>
                    </li>
                    <li>
                      <a href="/">Contact</a>
                    </li>
                    <li>
                      <a href="/">About us</a>
                    </li>
                    <li>
                      <a href="/">Our Services</a>
                    </li>
                    <li>
                      <a href="/">Expert Team</a>
                    </li>
                    <li>
                      <a href="/">Contact us</a>
                    </li>
                    <li>
                      <a href="/">Latest News</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="footer-content-col">
                  <div className="footer-content-heading text-white mb-5">
                    <h5>Subscribe</h5>
                  </div>
                  <div className="footer-text">
                    <p>
                      Don’t miss to subscribe to our new feeds, kindly fill the
                      form below.
                    </p>
                  </div>
                  <div className="subscribe-form">
                    <form action="/">
                      <input type="text" placeholder="Email Address" />
                      <button>
                        <FontAwesomeIcon
                          icon={faPaperPlane}
                          className="text-white"
                        />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="copyright-area px-0 py-3">
          <div class="container">
            <div class="row">
              <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                <div class="copyright-text">
                  <p className="m-0 fs-6">
                    Copyright © Relymer Labs - All rights reserved.{" "}
                    <a href="/">Relymer</a>
                  </p>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                <div class="footer-menu float-end">
                  <ul>
                    <Link to="/">
                      <li>
                        <a href="/">Home</a>
                      </li>
                    </Link>
                    <Link to="/">
                      <li>
                        <a href="/">Terms</a>
                      </li>
                    </Link>
                    <Link to="/">
                      <li>
                        <a href="/">Privacy</a>
                      </li>
                    </Link>
                    <Link to="/">
                      <li>
                        <a href="/">Policy</a>
                      </li>
                    </Link>
                    <Link to="/contact">
                      <li>
                        <a href="/">Contact</a>
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
