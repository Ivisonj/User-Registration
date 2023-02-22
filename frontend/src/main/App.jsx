import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import React from "react";
import './App.css';

import Logo from '../components/template/Logo/Logo';
import Nav from '../components/template/Nav/Nav';
import Home from '../components/home/Home';
import Footer from '../components/template/Footer/Footer';

export default props =>
    <div className="app">
        <Logo/>
        <Nav/>
        <Home/>
        <Footer/>
    </div>