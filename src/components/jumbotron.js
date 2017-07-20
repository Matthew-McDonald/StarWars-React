import React, {Component} from 'react';

class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1 className = 'display-3'>
          Star Wars
        </h1>
        <hr />
        <p className = 'lead'>The Vehicles of Star Wars</p>
      </div>
    )
  }
}

export default Jumbotron;
