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
    window.navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        Latitude: position.coords.latitude,
        Longitude: position.coords.longitude
      });
    });
  }
  render() {
    if (this.state.Longitude && this.state.Latitude) {
      return (
        <div>
          Latitude: {this.state.Latitude}
          <div>Longitude:{this.state.Longitude}</div>
          <SeasonDisplay
            lat={this.state.Latitude}
            long={this.state.Longitude}
          />
        </div>
      );
    } else {
      return <div>LOADING!!</div>;
    }
  }
}

export default App;
