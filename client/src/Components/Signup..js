import React from "react";
import { Link } from "react-router-dom";
import "./Dash.css";
// import { Link } from 'react-router-dom';
const axios = require("axios");

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {},
      data: [],
      dataa: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.Signup = this.Signup.bind(this);
  }

  handleChange(e) {
    let fields = this.state.fields;

    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  }
 
  Signup(e) {
    e.preventDefault();

    if (this.validateFrom()) {
      let fields = {};

      this.setState({ fields: fields });
      const userData = this.state.fields;
      userData.role = 1;

      console.log(this.state.fields);
      axios
        .post("http://localhost:5000/api/user", userData)
        .then(res => {
          console.log(res.data);

          if (res.data.msg == "1") {
            localStorage.setItem("tempMail:", this.state.fields.email);
            this.props.history.push("/login");
          } else {
            alert("wrong details");
          }
        })
        .catch(err => {
          console.log(err);
          alert("EROOR");
        });
    }
  }

  validateFrom() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;
    // alert("successfull");
    if (!fields["name"]) {
      formIsValid = false;
      errors["name"] = "*Name.";
    }

    if (typeof fields["name"] != "undefined") {
      if (!fields["name"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["name"] = "*alphabet .";
      }
    }

    if (!fields["last"]) {
      formIsValid = false;
      errors["last"] = "*lastName.";
    }

    if (typeof fields["last"] != "undefined") {
      if (!fields["last"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["last"] = "*alphabet.";
      }
    }

    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "*Please enter  email-.";
    }

    if (typeof fields["email"] !== "undefined") {
      //regular expression for email valation
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/
      );
      if (!pattern.test(fields["email"])) {
        formIsValid = false;
      }
      let lastAtPos = fields["email"].lastIndexOf("@");
      let lastDotPos = fields["email"].lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          fields["email"].indexOf("@@") === -1 &&
          lastDotPos > 2 &&
          fields["email"].length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors["email"] = "*Please enter val email-.";
      }
    }

    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "* password-.";
    }

    if (typeof fields["password"] !== "undefined") {
      //regular expression for password valation
      var patternn = new RegExp(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,16})/
      );
      if (!patternn.test(fields["password"])) {
        formIsValid = false;
        errors["password"] = "*val password-.";
      }
    }
    if (!fields["password2"]) {
      formIsValid = false;
      errors["password2"] = "*confrom_password-.";
    }

    // if (typeof (fields["password"] !== (fields["password2"]))) {
    //         // formIsValid = false;
    //   errors["password2"] = "*Please enter correct pass";
    // }

    if (!fields["mobile"]) {
      formIsValid = false;
      errors["mobile"] = "*Please enter  mobile no.";
    }

    if (typeof fields["mobile"] !== "undefined") {
      if (!fields["mobile"].match(/^[0-9]{10}$/)) {
        formIsValid = false;
        errors["mobile"] = "*Please enter mobile no.";
      }
    }
    if (!fields["age"]) {
      formIsValid = false;
      errors["age"] = "*age.";
    }
    if (!fields["address"]) {
      formIsValid = false;
      errors["address"] = "*Please enter  address.";
    }
    if (!fields["date_of"]) {
      formIsValid = false;
      errors["date_of"] = "*date_of_birth";
    }
    this.setState({
      errors: errors
    });
    return formIsValid;
  }

  render() {
    return (
      <div className="signup-form">
        <form className="fromm" onSubmit={this.Signup}>
          <h2>Sign Up</h2>
          <div className="form-group">
            <div className="form-row mb-4">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First_Name"
                  name="name"
                  value={this.state.fields.name || ""}
                  onChange={this.handleChange}
                />
                <span className="badge" style={{ color: "red" }}>
                  {this.state.errors.name}
                </span>
              </div>

              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  name="last"
                  placeholder="Last_Name"
                  value={this.state.fields.last || ""}
                  onChange={this.handleChange}
                />
                <span className="badge" style={{ color: "red" }}>
                  {this.state.errors.last}
                </span>
              </div>
            </div>
          </div>

          <div className="form-group">
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Email"
              value={this.state.fields.email || ""}
              onChange={this.handleChange}
            />
            <span className="badge" style={{ color: "red" }}>
              {this.state.errors.email}
            </span>
          </div>

          <div className="form-row mb-4">
            <div className=" col-md-6">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="password"
                value={this.state.fields.password || ""}
                onChange={this.handleChange}
              />
              <span className="badge" style={{ color: "red" }}>
                {this.state.errors.password}
              </span>
            </div>

            <div className=" col-md-6">
              <input
                type="password"
                className="form-control"
                placeholder="Confirm Password"
                name="password2"
                value={this.state.fields.password2 || ""}
                onChange={this.handleChange}
              />
              <span className="badge" style={{ color: "red" }}>
                {this.state.errors.password2}
              </span>
            </div>
          </div>



          <div className="form-row mb-4">
            <div className=" col-md-6">
              <input
                type="number"
                className="form-control"
                placeholder="age"
                name="age"
                value={this.state.fields.age || ""}
                onChange={this.handleChange}
              />
              <span className="badge" style={{ color: "red" }}>
                {this.state.errors.age}
              </span>
            </div>

            <div className=" col-md-6">
              <input
                type="number"
                className="form-control"
                placeholder="Date_of_birth"
                name="date_of"
                value={this.state.fields.date_of || ""}
                onChange={this.handleChange}
              />
              <span className="badge" style={{ color: "red" }}>
                {this.state.errors.date_of}
              </span>
            </div>
          </div>
          <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="address"
            placeholder="Address"
            value={this.state.fields.address || ""}
            onChange={this.handleChange}
          />
          <span className="badge" style={{ color: "red" }}>
            {this.state.errors.address}
          </span>
        </div>

          <div className="form-group">
            <input
              type="number"
              className="form-control"
              placeholder="Mobile_Number"
              name="mobile"
              value={this.state.fields.mobile || ""}
              onChange={this.handleChange}
            />
            <span className="badge" style={{ color: "red" }}>
              {this.state.errors.mobile}
            </span>
          </div>

         
          
          <div className="form-group">
          <button className="button btn-info btn-block my-4" type="submit" onClick="this.Signup">
    Signup
          </button>
        </div>
          

          <div className="hint-text">
            Already have an account? <Link to="/login">Login here</Link>
          </div>
        </form>
      </div>
    );
  }
}
export default Signup;
