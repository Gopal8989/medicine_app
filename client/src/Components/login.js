import React from "react";
import { Link } from "react-router-dom";
import "./Dash.css";
// import { Link } from 'react-router-dom';
const axios = require("axios");

class login extends React.Component {
  constructor() {
    super();

    this.state = {
      fields: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
  }

  handleChange(e) {
    let fields = this.state.fields;

    fields[e.target.name] = e.target.value;

    this.setState({
      fields
    });
  }

  login(e) {
    e.preventDefault();
    const userData = this.state.fields;
    console.log(this.state.fields);
    axios
      .post("http://localhost:5000/api/login", userData)
      .then(res => {
        console.log(res.data);
        const Dat =res.data.token;

        console.log(Dat);
        var app=localStorage.getItem("appoment")
        sessionStorage.setItem("token",Dat);
        console.log(app);
          if(app=='1'){
            localStorage.removeItem("appoment")
        // window.location.assign("/");
        this.props.history.push("/Appointment")
          }else{
            // sessionStorage.setItem("token",Dat);
        // window.location.assign("/");
        this.props.history.push("/Home")
          }


// alert("welcome")
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <div className="Stt">
        <form  className="fromm" onSubmit={this.login}>
          <h3>login</h3>

          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              name="email"
              value={this.state.fields.email || ""}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              name="password"
              value={this.state.fields.password || ""}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <button className="button btn-info btn-block my-4" type="submit">
              login
            </button>
          </div>
          <label>new user/</label>
         
          <Link to="/Signup">Signup</Link>
          <br></br>
          <label>*Forget password*</label>
          <Link to="/verify">click</Link>
          {/* <a to="/NotFound">click</a> */}
        </form>
      </div>
    );
  }
}
export default login;


