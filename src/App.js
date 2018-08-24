import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
   super();
   
   this.state={
    text: "HELLO WORLD"
   }

  }
  
  updateTheState(){
    this.setState({
    text: "HELLO PAKISTAN"
      
    })

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 onClick={() => this.updateTheState()} className="App-title">{this.state.text}</h1>
          {/* <button onClick={() => this.updateTheState()}>Change The State</button> */}
        </header>
      </div>
    );
  }
}

export default App;
