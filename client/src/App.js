import React from "react";

import Menu from "./Components/Menu";
import login from "./Components/login";
import Signup from "./Components/Signup.";
import Services from "./Components/Services";
import Terms_condition from "./Components/Terms_condition";
// import Contact from './Components/Contact'
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Help from "./Components/Help";
import Logout from "./Components/Logout";
import otp from "./Components/otp";
import NotFound from "./Components/NotFound";
import "./../node_modules/bootstrap/js/src/dropdown.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import verify from "./Components/verify";
import matchpassword from "./Components/matchpassword";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
//import {Nav, Navbar, NavDropdown, MenuItem, Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl} from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }
  hidehandle = () => {
    this.setState({ show: true });
  };
  componentWillMount() {
    if (
      sessionStorage.getItem("token") != null &&
      sessionStorage.getItem("token") != null
    ) {
      this.setState({ loggedIn: true });
    }
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Menu />

            <Switch>
              <Route exact path="/Help" component={Help} />
              <Route exact path="/Signup" component={Signup} />
              <Route exact path="/login" component={login} />
              <Route
                exact
                path="/Terms_condition"
                component={Terms_condition}
              />
              <Route exact path="/Services" component={Services} />
              <Route exact path="/Contact" component={Contact} />

              <Route exact path="/matchpassword" component={matchpassword} />
              <Route exact path="/logout" component={Logout} />
              <Route exact path="/NotFound" component={NotFound} />
              <Route exact path="/verify" component={verify} />

              <Route exact path="/otp" component={otp} />
            </Switch>
            <header>
              <main>
                <section className="rightsec">
                  <figure className="frr">
                    <img src=""></img>
                  </figure>
                </section>
                <section>
                  <h2 className="we">We Are Here For Your Care</h2>
                  <h1 className="wee">We The Best Doctors</h1>
                  <p className="weee">
                    We are here for your care 24/7.Any help just call us.
                  </p>
                  {this.state.show == false ? (
                    <Link to="/login">
                      {" "}
                      <button
                        className="bu btn-primary btn-lg disabled"
                        onClick={this.hidehandle}
                      >
                        MAKE AN APPOINTMENT
                      </button>
                    </Link>
                  ) : null}
                  {this.state.show == false ? (
                    <Link to="/Help">
                      {" "}
                      <button
                        className="buu btn-primary btn-lg disabled"
                        onClick={this.hidehandle}
                      >
                        Help
                      </button>
                    </Link>
                  ) : null}
                </section>
              </main>
            </header>
            <welcome />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
