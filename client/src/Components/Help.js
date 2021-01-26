import React from "react";
import { Link } from "react-router-dom";
import "./Dash.css";

class Help extends React.Component {
  render() {
    return (
     <div>
     <h1>24-Hour Medical Help Line</h1>
     <p>If you have a health concern and can’t reach a doctor right away, or you’re not sure where else to call, you can call our Medical Help Line 24 hours a day, 7 days a week. Once enrolled, this member benefit allows you to speak with an experienced registered nurse to get answers to your questions and find out what steps you need to take. If you are currently a member of Independent Health, you can find the phone number of the 24-Hour Medical Help Line on the back of your Member ID card.
     </p>
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
     <h5>HelpLine_No</h5>
     <h4>7887899887</h4>
     <Link to="/"><button type="button" className="btn-primary btn-lg disabled">back</button></Link>
     
     </div>
    );
  }
} 

export default Help;