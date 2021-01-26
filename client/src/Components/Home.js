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
    return (<div>
      
<div className="profile-setting-member-table">
              <div className="table-responsive-xs">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">medicine_name</th>
                      <th scope="col">Member Designation</th>
                      <th scope="col">Panel</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.data.map((data, i) =>
                      <tr>
                        <td scope="row">{data.medicine_name}</td>
                        
                       </tr>
                    )}
                  </tbody>
                </table>
              
              </div>
            </div>
</div>

      
    );
  }
}


export default Home;