import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { hello, user }  from './tools';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';


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
    username: 'avaseashta'
  }
    
  usernameChangedHandler = (event) => {
    this.setState({username: event.target.value});
  }


  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"> React App</h1>
        </header>
        <p className="App-intro">
          <code>{user.firstName}, welcome to my web app!</code>
          <button className="button" onClick={hello}> Ready? </ button>
        </p>
        <ol>
        <h2 className="App-title"> Assignment 1</h2>
          <li>Create TWO new components: UserInput and UserOutput</li>
          <li>UserInput should hold an input element, UserOutput two paragraphs</li>
          <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
          <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
          <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
          <li>Add a method to manipulate the state (=> an event-handler method)</li>
          <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol>
        <UserInput 
          changed={this.usernameChangedHandler} 
          currentName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName="Max" />
      </div>
    );
  }
}//


/* default vs named*/
export {
  App,
  Person,
}
