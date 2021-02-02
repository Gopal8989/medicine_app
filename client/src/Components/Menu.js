import React from "react";
import { Link } from "react-router-dom";
import Pagination from "react-bootstrap-4-pagination";
import "./Dash.css";
const axios = require("axios");

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      fields: {},
      data: [],
      dataa: [],
      medicine_name: "",
      // quntiy:'',
      // medicine_time:'',
      // medicine_details:'',
      // after_before_eating:'',
      // avabile_at:'',
      // price:'',
      // drug:'',
      show: false,
    };
  }
  // const  paginationConfig = {
  //   totalPages: 22,
  //   currentPage: 15,
  //   showMax: 5,
  //   size: "lg",
  //   threeDots: true,
  //   prevNext: true,
  //   href: 'https://example.com/items?page=*', // * will be replaced by the page number
  //   pageOneHref: 'https://example.com/items',
  //   borderColor: 'red',
  //   activeBorderColor: 'black',
  //   activeBgColor: 'grey',
  //   disabledBgColor: 'red',
  //   activeColor: 'red',
  //   color: 'purple',
  //   disabledColor: 'green',
  //   circle: true,
  //   shadow: true
  // };

  // componentWillMount(){
  //   this.props.history.push("/")

  //   }
  componentDidMount(){
    if (
      sessionStorage.getItem("token") != null &&
      sessionStorage.getItem("token") != null
    ) {
      this.setState({ loggedIn: true });
    } else {
      this.setState({ loggedIn: false });
    }
  }

  handleChange = (e) => {
    // this.props.history.push("/")
    let fields = this.state.fields;

    fields[e.target.name] = e.target.value;

    this.setState({
      fields,
    });
  };

  Menu = (e) => {
    // this.props.history.push("/")

    e.preventDefault();
    // const userData = this.state.fields.medicine_name;
    // localStorage.setItem('id', userData);
    console.log(this.state.fields);
    // alert("bhjdhjdf");
    axios
      .post(
        "http://localhost:5000/api/medicinesname/this.state.fields",
        this.state.fields
      )
      .then((res) => {
        console.log(res.data);
        this.setState({ show: false });
        // const json = res.json();
        this.setState({ data: res.data.data });
        // this.setState({ medicine_name: res.data.data[0].medicine_name });
        // this.setState({ quntiy: res.data.data.quntiy });
        // this.setState({ medicine_time: res.data.data.medicine_time });
        // this.setState({ medicine_details: res.data.data.medicine_details });
        // this.setState({ after_before_eating: res.data.data.after_before_eating });
        // this.setState({ price: res.data.data.price });
        // this.setState({ drug: res.data.data.drug });
        // this.setState({ avabile_at: res.data.data.avabile_at });
        // console.log(json);
      })
      .catch((err) => {
        alert("wrong");
      });
    // window.location.assign("/Services");
  };

  medicinename = (i) => {
    // this.props.history.push("/")
    let data = this.state.data[i];
    let name = data.medicine_name;
    this.setState({name:data.medicine_name});
    // e.preventDefault();
   var  Motrin="Motrin"
    //  const userData = e.target.value;
    // localStorage.setItem('id', userData);
    console.log(name);
    axios
    .post(
      "http://localhost:5000/api/medicines/Motrin",Motrin
    ) .then((res) => {
        // alert("bhjdhjdf");
        // axios
        //   .post("http://localhost:5000/api/medicines/name",name)
        //   .then((res) => {
        console.log(res.data);
        console.log(res.data.data);
        this.setState({ show: true });
        const json = res.json();
        console.log(json);
        this.setState({ dataa: res.data.data });
        // this.setState({ medicine_name: res.data.data.medicine_name });
        // this.setState({ quntiy: res.data.data.quntiy });
        // this.setState({ medicine_time: res.data.data.medicine_time });
        // this.setState({ medicine_details: res.data.data.medicine_details });
        // this.setState({ after_before_eating: res.data.data.after_before_eating });
        // this.setState({ price: res.data.data.price });
        // this.setState({ drug: res.data.data.drug });
        // this.setState({ avabile_at: res.data.data.avabile_at });
        // console.log(json);
      })
      .catch((err) => {
        alert("wrong");
      });
    // window.location.assign("/Services");
  };

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-secondary">
          <img
            src="https://www.freepnglogos.com/uploads/medical-logo-png-9.png"
            className="rounded-circle float-left"
            alt="aligment"
          />

          <div class="mr collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="nav navbar-nav navbar-right">
              {this.state.loggedIn == false ? (
                <li class="nav-item">
                  <Link to="/login">
                    <li class="nav-item"> login</li>
                  </Link>
                </li>
              ) : (
                <Link to="/Logout">
                  <li className="nav-item">Logout</li>
                </Link>
              )} {this.state.loggedIn == false ? (
              <li class="nav-item">
                <Link to="/Terms_condition">
                  <li class="nav-item">Terms&Condition</li>
                </Link>
              </li>) : ( <Link to="/Appointment">
                  <li className="nav-item">Appointment</li>
                </Link>)}
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Home
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link to="/Services">
                    <li> Services</li>
                  </Link>
                  <Link to="/Contact">
                    <li> Contact</li>
                  </Link>
                </div>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0" onSubmit={this.Menu}>
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                name="illness"
                value={this.state.fields.illness || ""}
                onChange={this.handleChange}
              />
              <button
                class="btn btn-outline-success my-2 my-sm-0 "
                type="submit"
                onclick={this.Menu}
              >
                Search
              </button>
            </form>
          </div>
        </nav>
        <div className="profile-setting-member-table">
          {this.state.data.map((data, i) => (
            <div className="table-responsive-xs" key={i}>
              {this.state.show == false ? (
                <h5
                  type="button"
                  onClick={() => this.medicinename(i)}
                  id={i}
                  value={data.id}
                >
                  {data.medicine_name}
                </h5>
              ) : null}
            </div>
          ))}
          <div className="table-responsive-xs">
            <table class="table">
              {this.state.show == true ? (
                <thead>
                  <tr>
                    <th scope="col">Medicine_Name</th>
                    <th scope="col">Available_At</th>
                    <th scope="col">Detail_Des</th>
                    <th scope="col">Drug</th>
                    <th scope="col">Price</th>
                    <th scope="col">Contact</th>
                    <th scope="col">Eat time</th>
                    <th scope="col">time open</th>
                  </tr>
                </thead>
              ) : null}
              <tbody>
                {this.state.dataa.map((data, i) => (
                  <tr key={i}>
                    <td scope="row">{data.medicine_name}</td>
                    <td scope="row">{this.state.avabile_at}</td>
                    <td scope="row">{this.state.medicine_details}</td>
                    <td scope="row">{this.state.drug}</td>
                    <td scope="row">{this.state.price}</td>
                    <td scope="row">{this.state.after_before_eating}</td>
                    <td scope="row">{this.state.Contact}</td>
                    <td scope="row">{this.state.medicine_time}</td>

                    {/* <td className="profile-setting-action"><i class="material-icons" onClick={() => this.fEdit(i)} data-toggle="modal" data-target="#add-member">edit</i>     <i class="material-icons" onClick={() => this.fRemove(i)}>delete</i></td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
