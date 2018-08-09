import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App, Person} from './App';
import registerServiceWorker from './registerServiceWorker';


var app = (
  <div>
   <Person name="Ankur" age="33" />
   <Person name="Buddy" age="4" />
   <Person name="Helena" age="30" />
   <Person name="Valentina" age="4" />
   <Person name="Ryan" age="21" />
   <Person name="Zach" age="22" />
   <Person name="Gary" age="25" />
   <Person name="Justin" age="29" />
   <Person name="Morgan" age="38" />
   <Person name="Olu" age="29" />
   <Person name="Damon" age="30" />
   <Person name="Deepika" age="29" />
  </div>
);

ReactDOM.render(app,
document.querySelector('#app'));


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
