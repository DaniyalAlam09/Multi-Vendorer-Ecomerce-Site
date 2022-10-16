import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { fname, lname, email, password } = this.state;
    console.log(fname, lname, email, password);
    const { value } = this.state;
    const re = new RegExp("(?=.*[a-z])(?=.*[A-Z]).{8,32}$");
    const isOk = re.test(value);

    console.log(isOk);

    // if (!isOk) {
    //   return alert("weak!");
    // }
    fetch("http://localhost:5000/register", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        fname,
        lname,
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");

        toast("Successfull Registered");
        window.localStorage.setItem("token", data.data);
        window.location.href = "/account";
      });
  }
  render() {
    return (
      <div class="wrapper container heading">
        <div className="row">
          <div className="col-md-6 text-center">
            <img src="/images/Account.png" alt="Image" className="img-fluid " />
          </div>
          <div class="inner">
            <form onSubmit={this.handleSubmit}>
              <h3>
                {" "}
                Become member of <strong>OVM</strong>
              </h3>
              <Link className="" to="/shopowner-account">
                Register as Shop Owner?
              </Link>
              <div class="form-group mt-2">
                <div class="form-wrapper mb-2">
                  <label for="">First Name</label>
                  <input
                    type="text"
                    class="form-control"
                    onChange={(e) => this.setState({ fname: e.target.value })}
                  />
                </div>
                <div class="form-wrapper mb-2">
                  <label for="">Last Name</label>
                  <input
                    type="text"
                    class="form-control"
                    onChange={(e) => this.setState({ lname: e.target.value })}
                  />
                </div>
              </div>
              <div class="form-wrapper mb-2">
                <label for="">Email</label>
                <input
                  type="email"
                  class="form-control"
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
              </div>
              <div class="form-wrapper mb-2">
                <label for="">Password</label>
                <input
                  type="password"
                  class="form-control"
                  onChange={(e) => this.setState({ password: e.target.value })}
                />
              </div>
              {/* <div class="form-wrapper mb-2">
                <label for="">Confirm Password</label>
                <input type="password" class="form-control" />
              </div> */}
              <div class="checkbox mb-3">
                <label>
                  <input type="checkbox" /> I accept the Terms of Use and
                  Privacy Policy.
                  <span class="checkmark"></span>
                </label>
              </div>
              <button
                type="submit"
                class="buttons btn text-white btn-block btn-primary"
              >
                Register Now
              </button>
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

// export default Signup;
