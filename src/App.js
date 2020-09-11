import React, { Component } from "react";
import Navbar from "./components/navbar/navbar";
import Sidedrawer from "./components/sidedrawer/sidedrawer";
import Backdrop from "./components/backdrop/backdrop";
import Category from './components/categories/categories';

class App extends Component {
  state = {
     sidedraweroption: false
  };

  drawertoggleclickhandler = () =>{
    this.setState((prevstate) => {
      return  {sidedraweroption: !prevstate.sidedraweroption};
    });
  };

  backdropclickhandler = () => {
    this.setState({sidedraweroption: false});
  };

  render() {
    let backdrop;

    if(this.state.sidedraweroption){
      backdrop = <Backdrop click={this.backdropclickhandler} />;
    }
    return (
      <div className="App">
        <Navbar drawerClickHandler={this.drawertoggleclickhandler} />
        <Sidedrawer show={this.state.sidedraweroption} />;
        {backdrop}
        
        <main style={{ marginTop: "64px" }}>
        <Category />
          <p>Here starts the main content</p>
        </main>
      </div>
    );
  }
}

export default App;
