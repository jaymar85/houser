import React, {Component} from 'react';
import './App.css';
import axios from "axios";
import Header from "./Components/Header/Header";
import Dashboard from "./Components/Dashboard/Dashboard";
import Wizard from "./Components/Wizard/Wizard";
import store from "./store";


class App extends Component {
  
  constructor(props) {
    super(props);
    const reduxState = store.getState();
    this.state = {
        houses: reduxState.houses
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
        <Dashboard homeListings={this.state.houses}/>
        <Wizard />
      </div>
    );
  }
}

export default App;
