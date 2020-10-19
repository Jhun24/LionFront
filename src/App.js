import React from 'react';
import logo from './logo.svg';
import './App.css';

import Index from './components/index/index'

import { BrowserRouter , Route} from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={Index}></Route>
        </div>
      </BrowserRouter>
  );
}

export default App;
