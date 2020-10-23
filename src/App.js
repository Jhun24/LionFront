import React from 'react';
import logo from './logo.svg';
import './App.css';

import Index from './components/index/index'
import User from './components/user/user'
import QR from './components/qrReader/qrReader';
import Login from './components/login/login'

import { BrowserRouter , Route} from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={Index}></Route>
          <Route exact path="/auth" component={Login}></Route>
          <Route exact path="/user" component={User}></Route>
          <Route exact path="/qr" component={QR}></Route>
        </div>
      </BrowserRouter>
  );
}

export default App;
