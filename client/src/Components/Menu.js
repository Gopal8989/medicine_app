import React from "react";
import "./Dash.css";
const axios = require("axios");

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      fields: {},
      data:[]
    };

    }

  handleChange=(e)=> {
    let fields = this.state.fields;

    fields[e.target.name] = e.target.value;

    this.setState({
      fields
    });
    
  }

  Menu =(e)=> {
    e.preventDefault();
    const userData = this.state.fields;
    console.log(this.state.fields);
    alert("bhjdhjdf")
    axios
      .post("http://localhost:5000/api/medicines/userData",userData)
      .then(res => {
        console.log(res.data);
        const json = res.json();
        this.setState({ data: json });
        console.log(json);
       
      })
      .catch(err => {
     alert("wrong")
      });
  }
  
  componentWillMount() {
    if (
      sessionStorage.getItem("DatToken") != null &&
      sessionStorage.getItem("DatToken") != null
    ) {
      this.setState({ loggedIn: true });
    } else {
      this.setState({ loggedIn: false });
    }
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <img
              src="https://www.freepnglogos.com/uploads/medical-logo-png-9.png"
              className="rounded-circle float-left"
              alt="aligment"
            />

  <div class="mr collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
   
      <li class="nav-item">
        <a class="nav-link" href="/login">login </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/Terms_condition">Terms&Condition</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Home
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="/Services">Services</a>
          <a class="dropdown-item" href="/Contact">Contact</a>
          </div>
      </li>
      
    </ul>
    <form class="form-inline my-2 my-lg-0" onSubmit={this.Menu}>
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"  name="medicine_name"
      value={this.state.fields.medicine_name || ""}
      onChange={this.handleChange}
/>
      <button class="btn btn-outline-success my-2 my-sm-0 " type="submit" onclick={this.Menu}>Search</button>
    </form>
  </div>
</nav>
// This example us
//       <div>
      
      
//       <nav class="navbar navbar-expand-lg navbar-light bg-light">
//       <a className="navbar-brand" href="/ho">
//       <img
//         src="https://www.freepnglogos.com/uploads/medical-logo-png-9.png"
//         className="rounded-circle float-left"
//         alt="aligment"
//       />

//   <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
//   <li class="nav-item dropdown">
//   <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#">Signup/login</a>
//   <div class="dropdown-menu">
//     <a class="dropdown-item" href="/login">login</a>
//     <a class="dropdown-item" href="/Signup">Signup</a>
   
//   </div>
// </li>
// <form class="form-inline my-2 my-lg-0">
// <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
// <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
// </form>
//     <li class="nav-item dropdown">
//     <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#">Home</a>
//     <div class="dropdown-menu">
//       <a class="dropdown-item" href="#">Services</a>
//       <a class="dropdown-item" href="#">Contact</a>
//       <a class="dropdown-item" href="#">Terms&Condition</a>
//     </div>
//   </li>
//  </div>
//       </a>
//       </nav>
      
//       </div>
      
    );
  }
}


export default Menu;