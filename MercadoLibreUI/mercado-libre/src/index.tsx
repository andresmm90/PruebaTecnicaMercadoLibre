import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import Header from './components/header';
import Details from './components/details';
import Results from './components/results';
import NotFound from './components/notFound';

ReactDOM.render(
    <Router>
      <Header/> 
      <Switch>
        <Route exact path="/" />
        <Route exact path="/items" component={Results}/>
        <Route exact path="/items/:id" component={Details}/>    
        <Route exact component={NotFound}/>  
      </Switch>
    </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
