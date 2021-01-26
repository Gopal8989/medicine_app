import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import "./Dash.css";

class Contact extends React.Component {
    constructor(props) {
        super(props);
      
        this.state = {
         
          fields: {},
          data:[]
        };
    
        }
    
        componentWillMount() {
       
      
      }
    render() {
        return (<div>
          
    <div className="profile-setting-member-table">
                  <div className="table-responsive-xs">
                    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col">Medical_name</th>
                          <th scope="col">Address</th>
                          <th scope="col">Phone</th>
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
    

export default Contact;