import React, { Component } from 'react';

class Form extends Component {
  constructor(props){
    super(props);

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {name: '',
                  pilot: ''};
  }
  handleNameChange(event){
    this.setState({name: event.target.value});
  }
  handleSubmit(event){
      event.preventDefault();
      this.setState({pilot: this.state.name})
      event.target.value = '';

  }
  render() {
    return (
      <div className = "card">
      <form onSubmit={this.handleSubmit}>
        <label>
          What is your name, pilot?:
          <br></br>
          <input onChange={this.handleNameChange} name="name" type="text" value={this.state.name}/>
        </label>
        <input type="submit" value="Submit" />
        <p>{this.state.pilot}</p>
      </form>
    </div>
    )
  }
}

export default Form;
