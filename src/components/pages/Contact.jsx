import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-us text-center text-white" id="contact">
      <div className="fields">
        <div className="container">
          <div className="row">
            <h2>Contact Us</h2>
            <p className="mb-5">Feel free to contact us</p>
              <div className="col-sm-12 col-md-6">
                <form action="">
                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="User Name"
                  />
                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Email"
                  />
                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Phone Number"
                  />
                  <textarea
                    className="form-control mb-3"
                    type="text"
                    placeholder="Your Message"
                    rows={3}
                    defaultValue={""}
                  />
                    <button
                  type="button"
                  className="btn btn-contact text-white"
                >
                  Contact Us
                </button>
                </form>
              </div>
              <div className="col-sm-12 col-md-6">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13300.637338499286!2d73.1233658!3d33.5492363!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb2207802be9f19cf!2sRelymer%20Group!5e0!3m2!1sen!2s!4v1664112634423!5m2!1sen!2s" width={450} height={300} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
