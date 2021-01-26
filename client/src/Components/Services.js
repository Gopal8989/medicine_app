import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import "./Dash.css";

class Services extends React.Component {
    constructor(props) {
        super(props);
      
        this.state = {
         
          fields: {},
          data:[]
        };
    
        }
    
        async componentDidMount() {
            const response = await fetch(`http://localhost:5000/api/medicines`);
            const json = await response.json();
            // console.log(json);
            this.setState({ data: json });
            // console.log(data.json);
        
          
      }
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
                          <tr>
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