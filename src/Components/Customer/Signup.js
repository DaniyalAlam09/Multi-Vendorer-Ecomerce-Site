import React, { Component } from "react";

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
              <div class="form-group">
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
            </form>
          </div>
        </div>
      </div>
    );
  }
}

// export default Signup;
