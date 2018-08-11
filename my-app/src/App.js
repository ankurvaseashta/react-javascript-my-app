import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { hello, user }  from './tools';


function Person(props){
  return (
   <div className="person">
    <h1>{props.name}</h1>
    <p>Your age: {props.age} </p>
  </div>
  );
}//

class App extends Component {

    state = {
      open: false,
    };

    handleClose = () => {
      this.setState({
        open: false,
      });
    };

    handleClick = () => {
      this.setState({
        open: true,
      });
    };


  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"> React App</h1>
        </header>
        <p className="App-intro">
           <code>{user.firstName}, welcome to my web app!</code>

          <button className="button" onClick={hello}> Hello </ button>
          <button className="button" onClick={() => alert(' ¯\\_(ツ)_/¯ ')}> test </ button>
        </p>
      </div>
    );
  }
}//


/* default vs named*/
export {
  App,
  Person,
}
