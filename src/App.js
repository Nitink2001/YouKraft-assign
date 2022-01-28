import './App.css';
import react, { useState } from 'react'
import Login from './Login';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/login" element={<><Header/><Home/><Login/></>}/>
          <Route path="/" element={<><Header/><Home/></>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;