import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { hello, user }  from './tools';

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
  const { classes } = this.props;
  const { open } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React App</h1>
        </header>
        <p className="App-intro">
           <code>{user.firstName}, welcome to my web app!</code>

          <button class="button" onClick={hello}> Hello </ button>
          <button class="button" onClick={() => alert(' ¯\\_(ツ)_/¯ ')}> test </ button>
        </p>
      </div>
    );
  }
}

export default App;
