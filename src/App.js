import React, { Component } from "react";
import "./App.css";
import SeasonDisplay from "./Components/SeasonDisplay";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Latitude: null,
      Longitude: null
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        Latitude: position.coords.latitude,
        Longitude: position.coords.longitude
      });
    });
  }
  render() {
    return (
      <div>
        <SeasonDisplay lat={this.state.Latitude} long={this.state.Longitude} />
      </div>
    );
  }
}

export default App;
