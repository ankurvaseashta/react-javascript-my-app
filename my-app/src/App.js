import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { hello, user }  from './tools';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import Validation from './Validation/Validation';
import Char from './Char/Char';

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
    username: 'avaseashta',
    userInput: ''
  }
    
  usernameChangedHandler = ( event ) => {
    this.setState({username: event.target.value});
  }

  inputChangedHandler = ( event ) => {
      this.setState({userInput: event.target.value});
  }

  deleteCharHandler = ( index ) => {
      const text = this.state.userInput.split('');
      text.splice(index, 1);
      const updatedText = text.join('');
      this.setState({userInput: updatedText});
  }

  render() {

    const charList = this.state.userInput.split('').map((ch, index) => {
      return <Char 
      character={ch} 
      key={index}
      clicked={() => this.deleteCharHandler(index)} />;
    });

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
        <UserOutput userName={this.state.username} />
        <UserOutput userName="Ankur" />
        <ol>
          <h2 className="App-title"> Assignment 2</h2>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <input type="text" 
          onChange={this.inputChangedHandler} 
          value={this.state.userInput}/>
          <p>{this.state.userInput}</p>
          <Validation inputLength={this.state.userInput.length}/>
          {charList}
      </div>
    );
  }
}//


/* default vs named*/
export {
  App,
  Person,
}
