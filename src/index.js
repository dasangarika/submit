import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Teacher from './Teacher';
import Contact from './Contact';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Switch,NavLink } from 'react-router-dom';
ReactDOM.render(
      <React.StrictMode>
      <div className="wrapper">
      <h1>Home</h1>
      <nav id="sidebar">
      <h4>Teacher</h4>
      <h4>Student</h4>
      <BrowserRouter>
      <div>

           <Switch>
             <Route path="/contact" component={Contact}/>
           </Switch>
        </div> 
      </BrowserRouter>
      </nav>
     
      <div id="content">
     

        <App />
        <Teacher />
        </div>
        </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

