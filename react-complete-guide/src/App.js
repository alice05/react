import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: "Max", age: 28},
      { name: "Manu", age: 28},
      { name: "Staphini", age: 26}
    ]
  }

  switchNameHandler = () => {
    this.setState( {
      persons: [
        { name: "Maximiliand", age: 28},
        { name: "Manu", age: 28},
        { name: "Staphini", age: 27}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Maximiliand", age: 28},
        { name: event.target.value, age: 28},
        { name: "Staphini", age: 27}
      ]
    });
  }

   render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <button style = {style} onClick={this.switchNameHandler.bind(this, 'Maximalian')}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click = {this.switchNameHandler.bind(this, 'Max!') }/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} changed = {this.nameChangedHandler}> My hobbies </Person>
      </div>
    );
  }
}

export default App;
