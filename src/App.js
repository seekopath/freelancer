import React, { Component } from "react";
import Category from "./components/categories/categories";
import Feature from "./components/features/feature";
import Carousell from "./components/carousel/carousel";
import Hello from './components/featuredjobs/featuredjobs';
import Testimonial from './components/testimonial/testimonial';
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <main className="main">
          <Carousell />
          <Category />
          <Hello />
          <Feature />
          <Testimonial />
          <p>Here starts the main content</p>
        </main>
      </div>
    );
  }
}

export default App;