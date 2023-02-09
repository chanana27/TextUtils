import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from "./components/Navbar";
import Textform from './components/Textform';
import Alert from './components/Alert';
import {
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link
} from "react-router-dom";

function App() {
  const[mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })

      setTimeout(()=> {
        setAlert(null);
      }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode("dark");
      document.body.style.backgroundColor = '#1d2c60';
      showAlert("DarkMode has been enabled!", "Success");
    }
    else{
      if(mode === 'dark'){
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("LightMode has been enabled!", "Success");
      }
    }
  }

  const toggleMode2 = ()=>{
    if(mode === 'light' || mode === 'dark'){
      setMode("green");
      document.body.style.backgroundColor = '#34eb7a';
    }
    else if(mode === 'green'){
      setMode("light");
      document.body.style.backgroundColor = "white";
    }

  }
  return (
  <>
  <Router>
   <Navbar title = "TEXTUTILS" home = "HOME" about = "ABOUT" mode = {mode} toggleMode={toggleMode} toggleMode2 = {toggleMode2}/>
   <Alert alertt= {alert}/>
   <div className="container my-3">
    <Routes>
      <Route exact path="/about"
        element = {<About />} />

      <Route exact path = "/"
        element = {<Textform heading= "Enter the text to analyze" mode = {mode} showAlert = {showAlert}/>} />
    </Routes>
   </div> 
   </Router>  
  </>
  );
}

export default App;
