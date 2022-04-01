import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Home from './components/home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Topbar from './components/topbar/Topbar';
import Footer from './components/footer/Footer';
import OfferedServices from './components/offeredServices/OfferedServices';
import Testimonials from './components/testimonials/Testimonials';
import Signature from './components/signature/Signature';
import MapHours from './components/mapHours/MapHours';

ReactDOM.render(
  <BrowserRouter>
  <Topbar/>
  <Home/>
  <OfferedServices/>
  <Testimonials/>
  <MapHours/>
  <Signature/>
  <Routes>
    <Route exact path="/" component={Home}/>
    <Route exact path="/home" component={Home}/>
  </Routes>
  <Footer/>
  </BrowserRouter>,
document.getElementById('root')
);