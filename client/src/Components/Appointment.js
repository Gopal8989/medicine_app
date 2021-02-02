import React from "react";
import { Link } from "react-router-dom";
import "./Dash.css";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import date from 'date-and-time';
// import { Link } from 'react-router-dom';
const axios = require("axios");
var randomHour = require("random-hour");
var randomDate = require("random-datetime");

class Appointment extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {},
      data: [],
      dataa: [],
      randomNumber: 0,
      generateRandomNumber: "",
      time: "",
      setOpen: "false",
      token: "",
      timeing: "",
      illness: "",

      CityDAta: [
        { city: "Indore" },
        { city: "Neemuch" },
        { city: "Indore" },
        { city: "Ujjain" },
        { city: "Bhopal" },
        { city: "Mandsour" },
        { city: "Khorgon" },
        { city: "Dhar" },
      ],
    };

    this.handleChange = this.handleChange.bind(this);
    this.Appointment = this.Appointment.bind(this);
  }

   handleClickOpen = () => {
    this.setState({ setOpen:true });

  };

  handleClose = () => {
    this.setState({ setOpen: false });
  };

  //  randomDate(start, end, startHour, endHour) {

  //   let fields = this.state.fields;

  //   fields.endHour =hour;
  //   this.setState({
  //     fields
  //   });

  //   return hour;
  // }
  //   randomDate({
  //     year:'' 2004,
  //     month: 4
  // });
  handleChange(e) {
    let fields = this.state.fields;

    fields[e.target.name] = e.target.value;
    this.setState({
      fields,
    });
  }
  componentDidMount() {
    fetch(`http://localhost:5000/api/hospitals`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ dataa: data.data });
      
        // console.log(now);
      });
  }
  componentWillUnmount() {
    this.setState({ token: localStorage.getItem("token") });
    this.setState({ timeing: localStorage.getItem("timeing") });
    this.setState({ illness: localStorage.getItem("illness") });
  }
  Appointment(e) {
    e.preventDefault();

    if (this.validateFrom()) {
      let fields = {};
      
      /////token_no gen
      var max = 2;
      var min = 4 * 6 - 4;
      var generateRandomNumber =
        Math.floor(Math.random() * (max - min + 1)) + min;
      console.log(generateRandomNumber);
      this.setState({ fields: fields });
      let userData = this.state.fields;

      let now = new Date();
      date.format(now, 'YYYY/MM/DD HH:mm:ss');    // => '2015/01/02 23:14:05'
      date.format(now, 'ddd, MMM DD YYYY');       // => 'Fri, Jan 02 2015'
      date.format(now, 'hh:mm A [GMT]Z');         // => '11:14 PM GMT-0800'
      date.format(now, 'hh:mm A [GMT]Z', true);   // => '07:14 AM GMT+0000'
      

      ////random hour
      let hour = randomHour({ year: 2021, month: 1 });

      //////random date
      let d = randomDate({ twentyFour: true, min: 1, max: 12 });
      // console.log(d);
      // console.log(h);
      userData.token_nu = generateRandomNumber;
      userData.time = now;
      console.log(this.state.fields);
      axios
        .post("http://localhost:5000/api/appointment", userData)
        .then((res) => {
          console.log(res.data);
          // this.setState({token:res.data.token_nu})
          // this.setState({timeing:res.data.time})
          // this.setState({illness:res.data.illness})
          localStorage.setItem("token:", res.data.token_nu);
          localStorage.setItem("timeing:", res.data.time);
          localStorage.setItem("illness:", res.data.illness);

          // this.setState({ setOpen:true });

          if (res.data.token_nu != "1") {
            this.setState({ setOpen: true });
            // localStorage.setItem("tempMail:", this.state.fields.email);
            this.props.history.push("/Home");
            
          } else {
            alert("wrong details");
          }
        })
        .catch((err) => {
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
    if (!fields["illness"]) {
      formIsValid = false;
      errors["illness"] = "*illness.";
    }

    if (!fields["datee"]) {
      formIsValid = false;
      errors["datee"] = "*Date.";
    }
    if (!fields["m_number"]) {
      formIsValid = false;
      errors["m_number"] = "*mobile.";
    }
    if (typeof fields["m_number"] !== "undefined") {
      if (!fields["m_number"].match(/^[0-9]{10}$/)) {
        formIsValid = false;
        errors["m_number"] = "* Ten only.";
      }
    }

    this.setState({
      errors: errors,
    });
    return formIsValid;
  }

  render() {
    return (
      <div className="signup-form">
        <form className="fromm" onSubmit={this.Appointment}>
          <h2>Appointment From</h2>
          {/* <div className="form-group"> */}
          {/* <div className="form-row mb-4"> */}
          <div className="form-group">
            <label>Select Hospital:</label>
            <select
              required
              className="form-control"
              name="hospital"
              value={this.state.fields.hospital || ""}
              onChange={this.handleChange}
              // autoComplete="off"
            >
              {this.state.dataa.map((el, i) => (
                <option key={i}>
                  {/* {el.id}: {el.name} */}
                  {el.hospital_name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Select City:</label>
            <select
              required
              className="form-control"
              name="city"
              value={this.state.fields.city || ""}
              onChange={this.handleChange}
              // autoComplete="off"
            >
              {this.state.CityDAta.map((el, i) => (
                <option key={i}>
                  {/* {el.id}: {el.name} */}
                  {el.city}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="illness"
              size="50"
              name="illness"
              value={this.state.fields.illness || ""}
              onChange={this.handleChange}
            />
            <span className="badge" style={{ color: "red" }}>
              {this.state.errors.illness}
            </span>
          </div>

          <div className="form-group">
            <input
              type="date"
              className="form-control"
              name="datee"
              placeholder="datee"
              value={this.state.fields.datee || ""}
              onChange={this.handleChange}
            />
            <span className="badge" style={{ color: "red" }}>
              {this.state.errors.datee}
            </span>
          </div>

          <div className="form-group">
            <input
              type="tel"
              className="form-control"
              name="m_number"
              placeholder="Mobile"
              value={this.state.fields.m_number || ""}
              onChange={this.handleChange}
            />
            <span className="badge" style={{ color: "red" }}>
              {this.state.errors.m_number}
            </span>
          </div>

          <div className="form-group">
            <Button
              variant="outlined"
              color="primary"
              onClick={this.Appointment}
            >
              submit
            </Button>
            {/* <button className="button btn-info btn-block my-4"   type="submit" onClick="this.Signup">
     submit
          </button> */}
            {/* onClick={this.handleClickOpen}  */}
          </div>
        </form>

        <div>
          <Dialog
            open={this.state.setOpen}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
            
             <h1>welcome</h1> 
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
               <p> your Token number
           
                and timeing</p> <p>genert Fill the from</p>
                {this.state.timeing}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
             
              <Button onClick={this.handleClose} color="primary" autoFocus>
                Agree
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    );
  }
}
export default Appointment;
