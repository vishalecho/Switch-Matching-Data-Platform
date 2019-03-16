import React, { Component } from "react";
import "./App.css";
import Dashboard from "./screens/Dashboard";

class App extends Component {
  constructor(){
    super();
    this.state= {    }
  }
  
  renderDashboardElements() {
    return (
      <div>
        <Dashboard/>
      </div>
    );
  } 
  
  render() {
    return this.renderDashboardElements(); 
  }
}

export default App;
