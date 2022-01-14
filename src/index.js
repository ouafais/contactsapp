import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactsList from './components/ContactsList';
import NavigationBar from './components/NavigationBar';
import Footer from './components/footer';
import NewContact from "./components/NewContact";
import './index.css';


ReactDOM.render(
  <Router>   
  <NavigationBar />
    <Routes>
      <Route path="/" element={<ContactsList />} />
      <Route path="/new" element={<NewContact />} />          
    </Routes> 
  <Footer />       
</Router>,
  document.getElementById('root')
);
