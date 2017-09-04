require('./bootstrap');

window.React = require('react');
window.ReactDOM = require('react-dom');

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; 
import { IndexRoute } from 'react-router'; 

import App from './components/App.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Home from './components/Home.jsx';
// ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render((
  <Router>
    <div>
      <App />

      <Route exact path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>
	
), document.getElementById('app'))
