import React, { Component } from "react";
import "./Dashboard.css";
import Paper from "@material-ui/core/Paper";
import { lightBlue, green } from "@material-ui/core/colors";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {    };
  }
 
  render() {
    return (
      <Paper elevation={1} className="Dashboard">
        <div style={{ backgroundColor: "#FFF000" }}>
          <h1>Under development...! Comming soon.</h1>
        </div>
      </Paper>
    );
  }
}
