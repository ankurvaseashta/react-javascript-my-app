import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { hello, user }  from './tools';

/*ES6 refresher*/
let myName = 'Ankur';
console.log("Welcome " + myName);

myName = 'AnkurTest';
console.log(myName);

const printMyName = (name, age) => {
  console.log(name, age);
}
printMyName('Max', 33);

const multiply = number => number * 2;
console.log(multiply(2));
/*ES6*/

/*Spread operator*/
const numbers = [1,2,3];
const newNumbers = [...numbers, 4];

console.log(newNumbers);

const person = {
  name: 'Ankur'
}

const newPerson = {
  ...person,
  age: 33
}

console.log(newPerson);
/*Spread operator*/

/*Rest operator*/
const filter = (...args) => {
  return args.filter(el => el === 1);
}

console.log(filter(1,2,3));
/*Rest operator*/


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
          <h1 className="App-title">React App</h1>
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
