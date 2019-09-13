import React, {Component} from 'react';
import axios from "axios";
import Header from "./Components/Header/Header";
import Dashboard from "./Components/Dashboard/Dashboard";
import Wizard from "./Components/Wizard/Wizard";
import './App.css';


class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
        houses: []
    }
    this.getHouses = this.getHouses.bind(this);
  }

  componentDidMount() {
    this.getHouses();
  } 

  getHouses() {
    axios
      .get("/api/houses")
      .then(response => {
        this.setState({
            houses: response.data
        });
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard />
        <Wizard />
      </div>
    );
  }
}

export default App;
