

import './App.css';
import Registration from './components/RegistrationForm/Registration';

import { Component } from 'react';
import './App.css';
import { BrowserRouter, Route} from "react-router-dom";
import RegistrationForm from './components/RegistrationForm/Registration';
import Home from './components/Home/Home';


function App() {
  return (
    <div>
        <BrowserRouter>
          <div>
            <Route path="/" component={RegistrationForm} exact></Route>
            <Route path="/Home" component={Home}></Route>
          </div>
        </BrowserRouter>
      </div>
  );
}

export default App;
