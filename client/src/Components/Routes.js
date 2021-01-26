import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Normal from "./Normal";
import Home from "./Home";


class routes extends React.Component {
  render() {
   return (
    <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component= {Normal} />
        <Route path="/Home" component={Home} />
      </Switch>
     </div>
    </BrowserRouter>
    );
  }
};

export default routes;