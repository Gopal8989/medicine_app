import { data } from "jquery";
import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import "./Dash.css";
const axios = require("axios");


class Services extends React.Component {
    constructor(props) {
        super(props);
      
        this.state = {
         
          fields: {},
          medicine_name:'',
          data:[]
        };
    
        }
        // componentDidMount() {
        //   fetch(`http://localhost:5000/api/medicines`)
        //     .then(res => res.json())
        //     // var json=res.json()
        //     .then(json => this.setState({ data: json }));
        //     // console.log(this.state.data)
        // }
    
        //  componentDidMount() {
        
          
        //    var medicine_name=  localStorage.getItem('id');
        //   console.log(this.state.fields);
        //   this.setState({ medicine_name:  localStorage.getItem('id') });
        //   alert(medicine_name);
        //   axios
        //     .post("http://localhost:5000/api/medicines/singoli","singoli")
        //     .then((res) => {
        //       console.log(res.data);
        //       const json = res.json();
        //       this.setState({ data: json });
        //       console.log(json);
        //     })
        //     .catch((err) => {
        //       alert("wrong");
        //     });
        // };
    render() {
        return (<div>
          
    <div className="profile-setting-member-table">
                  <div className="table-responsive-xs">
                    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col">Medicine_Name</th>
                          <th scope="col">Available_At</th>
                          <th scope="col">Detail_Des</th>
                          <th scope="col">Drug</th>
                          <th scope="col">Price</th>
                          <th scope="col">Contact</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.data.map((data, i) =>
                          <tr >
                            <td scope="row">{data.medicine_name}</td>
                            <td scope="row">{data.avabile_at}</td>
                            <td scope="row">{data.medicine_details}</td>
                            <td scope="row">{data.drug}</td>
                            <td scope="row">{data.price}</td>
                            
                         
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
    

export default Services;