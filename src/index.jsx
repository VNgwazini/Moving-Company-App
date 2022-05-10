import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter, Route } from 'react-router-dom'
import Topbar from './components/topbar/Topbar';
import Footer from './components/footer/Footer';
import App from './components/App/App';
import MovingPackages from './components/movingPackages/MovingPackages';
import Signature from './components/signature/Signature';
import MapHours from './components/mapHours/MapHours';

ReactDOM.render(
  <BrowserRouter>
    <Topbar/>
    <Route exact path="/" component={App}/>
      <Route exact path="/home" component={App}/>
      <Route exact path="/movingPackages" component={MovingPackages}/>
      <MapHours/>
      <Signature/>
    <Footer/>
  </BrowserRouter>,
document.getElementById('root')
);