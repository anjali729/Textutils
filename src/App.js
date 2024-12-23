import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Alert from './Components/Alert';
// import About from './Components/About';
import React from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');             //whether dark mode is enable or not
  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey'
      showAlert("Dark mode is Enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode is Enabled", "success");
    }
  }
  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }
  return (
    <>
      {/* <Router> */}
        <Navbar Title="TextUtils" mode={mode} toggleMode={togglemode} />
        <Alert alert={alert} />
        <div className="container my-3">
        <Textform showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
          {/* <Routes> */}
            {/* <Route path="/about" element={<About/>}/> */}
            {/* <Route path="/home" element={<Textform showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />}/> */}
            {/* <Route path="/textform" element={<Textform showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />}/> */}
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
