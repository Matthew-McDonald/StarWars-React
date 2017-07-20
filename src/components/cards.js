import React, { Component } from 'react';

class Cards extends Component {
  constructor () {
    super()
    this.state = {
      vehicleList: []
    }
  }

  componentDidMount() {
    fetch('https://swapi.co/api/vehicles/')
    .then(resp => resp.json())
    .then((vehicles) => {
      // console.log('found earthquakes:', earthquakes);
      let vehicleOut = vehicles.results.map((card) => {
        return (
          <div className="col-sm-4" key={card.name}>
            <div className="card" >
              <div className="card-block">
                <p className="card-spec">Vehicle:{card.name}</p>
                <p className = 'card-model'>Model: {card.model}</p>
                <ul>
                  <li>
                    Specs
                    <ul>
                      <li>Manufacturer: {card.manufacturer}</li>
                      <li>Class: {card.vehicle_class}</li>
                      <li>Passengers: {card.passengers}</li>
                      <li>Crew: {card.crew}</li>
                      <li>Length: {card.length}</li>
                      <li>Max Speed: {card.max_atmosphering_speed}</li>
                      <li>Cargo Capacity: {card.cargo_capacity}</li>
                    </ul>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        )
      })
      this.setState({vehicleList: vehicleOut})
    })
    .catch((err) => {
      console.log('There was an error importing usgs earthquake data:', err);
    })
  }

  render() {
    console.log('state of earthList:', this.state.vehicleList);
    return (
      <div className="card-list">
        <div className ='row'>
          {this.state.vehicleList}
        </div>
      </div>
    )
  }
}

export default Cards;
