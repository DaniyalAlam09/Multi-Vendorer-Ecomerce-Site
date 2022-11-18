import React from "react";
import { UilLocationPoint } from "@iconscout/react-unicons";
import Navbar from "./Navbar";

function Contact() {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="py-5">
        <div className="container py-4">
          <h2 className="text-uppercase lined mb-4">Contact Us</h2>
          <h2 className="heading text-uppercase lined mb-4">
            We are here to help you
          </h2>
          <p className="lead mb-5">
            Are you curious about something? Do you have some kind of problem
            with our products? As am hastily invited settled at limited civilly
            fortune me. Really spring in extent an by. Judge but built gay party
            world. Of so am he remember although required. Bachelor unpacked be
            advanced at. Confined in declared marianne is vicinity.
          </p>
          <p className="text-sm mb-5">
            Please feel free to contact us, our customer service center is
            working for you 24/7.
          </p>
          <div className="row gy-5 mb-5">
            <div className="col-lg-4 block-icon-hover text-center">
              <div className="icon icon-outlined icon-outlined-primary icon-thin mx-auto mb-3">
                <UilLocationPoint className="icons" />
              </div>
              <h4 className="text-uppercase mb-3">Address</h4>
              <p className="text-gray-600 text-sm">
                13/25 New Avenue
                <br />
                New Heaven, 45Y 73J
                <br />
                England, <strong>Great Britain</strong>
              </p>
            </div>
            <div className="col-lg-4 block-icon-hover text-center">
              <div className="icon icon-outlined icon-outlined-primary icon-thin mx-auto mb-3">
                <UilLocationPoint className="icons" />
              </div>
              <h4 className="text-uppercase mb-3">Call center</h4>
              <p className="text-gray-600 text-sm">
                This number is toll free if calling from Great Britain otherwise
                we advise you to use the electronic form of communication.
              </p>
              <p className="text-gray-600 text-sm">
                <strong>+33 555 444 333</strong>
              </p>
            </div>
            <div className="col-lg-4 block-icon-hover text-center">
              <div className="icon icon-outlined icon-outlined-primary icon-thin mx-auto mb-3">
                <UilLocationPoint className="icons" />
              </div>
              <h4 className="text-uppercase mb-3">Electronic support</h4>
              <p className="text-gray-600 text-sm">
                Please feel free to write an email to us or to use our
                electronic ticketing system.
              </p>
              <ul className="list-unstyled text-sm mb-0">
                <li>
                  <strong>
                    <a href="mailto:">info@fakeemail.com</a>
                  </strong>
                </li>
                <li>
                  <strong>
                    <a href="#">Ticketio</a>
                  </strong>{" "}
                  - our ticketing support platform
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-7 mx-auto">
              <h2 className="lined lined-center text-uppercase mb-4">
                Contact form
              </h2>
              <form action="#">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label" for="firstname">
                      First Name
                    </label>
                    <input
                      className="form-control"
                      id="firstname"
                      type="text"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label" for="lastname">
                      Last Name
                    </label>
                    <input className="form-control" id="lastname" type="text" />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label" for="emailaddress">
                      Email Address
                    </label>
                    <input
                      className="form-control"
                      id="emailaddress"
                      type="email"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label" for="subject">
                      Subject
                    </label>
                    <input className="form-control" id="subject" type="text" />
                  </div>
                  <div className="col-md-12 mb-3">
                    <label className="form-label" for="message">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      rows="4"
                    ></textarea>
                  </div>
                  <div className="col-md-12 text-center">
                    <button
                      className="btn button btn-outline-primary"
                      type="submit"
                    >
                      <i className="far fa-envelope me-2"></i>Send message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
