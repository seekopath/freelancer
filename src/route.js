import React, { Component } from "react";
import Navbar from "./components/navbar/navbar";
import Sidedrawer from "./components/sidedrawer/sidedrawer";
import Backdrop from "./components/backdrop/backdrop";
import App from "./App";
import { BrowserRouter, Route } from "react-router-dom";
import SignIn from "./components/signin/signin";
import SignUp from "./components/signup/signup";
import Dashboard from './components/dashboard/dashboard'; 
import Dashboarduserprofile from './components/dashboard/dashboardprofile/dashboardprofile'; 
import Category from './components/category/category';

class Routes extends Component {
    state = {
        sidedraweroption: false,
      };
    
      drawertoggleclickhandler = () => {
        this.setState((prevstate) => {
          return { sidedraweroption: !prevstate.sidedraweroption };
        });
      };
    
      backdropclickhandler = () => {
        this.setState({ sidedraweroption: false });
      };
  render() {
    let backdrop;

    if (this.state.sidedraweroption) {
      backdrop = <Backdrop click={this.backdropclickhandler} />;
    }
    return (
      <BrowserRouter>
          <Route exact path="/">
          <Navbar drawerClickHandler={this.drawertoggleclickhandler} />
          <Sidedrawer show={this.state.sidedraweroption} />
          {backdrop}
          <App />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/profile">
          <Dashboarduserprofile />
        </Route>
        <Route path="/category">
          <Category />
        </Route>
      </BrowserRouter>
    );
  }
}

export default Routes;
