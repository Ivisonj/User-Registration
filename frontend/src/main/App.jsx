import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import React from "react";
import './App.css';
import { BrowserRouter } from 'react-router-dom';

import Logo from '../components/template/Logo/Logo';
import Nav from '../components/template/Nav/Nav';
import Routes from './routes/Routes';
import Footer from '../components/template/Footer/Footer';

export default props =>
    <BrowserRouter>
        <div className="app">
            <Logo/>
            <Nav/>
            <Routes />
            <Footer/>
        </div>
    </BrowserRouter>