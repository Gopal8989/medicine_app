import { data } from "jquery";
import React from "react";
import "./Dash.css";
// const axios = require("axios");

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
     
      fields: {},
      data:[]
    };

    }

    componentWillMount() {
   
    const medicine= localStorage.getItem("medcine_getdata") 
 
      this.setState({ data: medicine });
   

  
  }
  render() {
    return (
      
<div className="profile-setting-member-table">
              welcome
</div>

      
    );
  }
}


export default Home;