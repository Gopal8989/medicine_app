import React from "react";
import { Link } from "react-router-dom";
import "./Dash.css";

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {},
      data: [],
    };
  }

  componentDidMount() {
    fetch(`http://localhost:5000/api/medicines`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ data: data.data });

        console.log(data);
      });
  }

  render() {
    return (
      <div>
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
                  <th scope="col">Eat time</th>
                  <th scope="col">time open</th>
                </tr>
              </thead>
              <tbody>
                {this.state.data.map((data, i) => (
                  <tr>
                    <td scope="row">{data.medicine_name}</td>
                    <td scope="row">{data.avabile_at}</td>
                    <td scope="row">{data.medicine_details}</td>
                    <td scope="row">{data.drug}</td>
                    <td scope="row">{data.price}</td>
                    <td scope="row">{data.after_before_eating}</td>
                    <td scope="row">{data.Contact}</td>
                    <td scope="row">{data.medicine_time}</td>
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

export default Contact;
