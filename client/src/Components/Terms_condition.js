import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import "./Dash.css";

class Terms_condition extends React.Component {
  render() {
    return (
     <div>
     <h1>Terms & Conditions</h1>
     <p>This website is designed, developed and maintained by National Informatics Centre for the Central Medical Services Society, Government of India.</p>
     <p>Though all efforts have been made to ensure the accuracy and correctness of the content on this website, the same should not be construed as a statement of law or used for any legal purposes. In case of any ambiguity or doubts, users are advised to verify/check with the Department and/or other sources and to obtain appropriate professional advice.

     Under no circumstances will this Department be liable for any expense, loss or damage including, without limitation, indirect or consequential loss or damage, or any expense, loss or damage whatsoever arising from use, or loss of use, of data, arising out of or in connection with the use of this website.
     
     These terms and conditions shall be governed by and construed in accordance with the Indian Laws. Any dispute arising under these terms and conditions shall be subject to the jurisdiction of the courts of India.
     
     The information posted on this website could include hypertext links or pointers to information created and maintained by non-Government / private organizations.Centre for the Central Medical Services Society is providing these links and pointers solely for your information and convenience. When you select a link to an outside website, you are leaving the Central Medical Services Society website and are subject to the privacy and security policies of the owners/sponsors of the outside website.
     
     Central Medical Services Society does not guarantee the availability of such linked pages at all times.</p>
     <h6>What Kind of Help Can You Get If You Call The Medical Help Line?</h6>
     <h6> Advice on how to treat a child’s fever or minor injury</h6>
     <h6> Help understanding symptoms and choosing the right care</h6>
     <h6> Medicine interactions and side effects</h6>
     <h6>Help with medical needs</h6>
     <h6>Information about heart disease, asthma or diabetes</h6>
     <h6>Details about common surgeries</h6>
     <h6>Health and wellness information</h6>
     <h6>Advice on choosing foods that are good for you</h6>
     <h6>Advice on Vaccinations</h6>
     <Link to="/"><button type="button" className="btn-primary btn-lg disabled">back</button></Link>
     
     </div>
    );
  }
} 

export default Terms_condition;