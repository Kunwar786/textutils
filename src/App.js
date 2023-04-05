import "./App.css";
import Alert from "./components/Alert";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from 'react';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";


function App() {

  const [Mode,setMode] = useState('white');

  const [alert,setAlert] = useState(null);

    const showAlert = (msg,type)=>{
        setAlert({
          mesg:msg,
          typ:type
        })

        setTimeout(() => {
          setAlert(null);
        }, 2500);
    }
    

    const toggleButton =()=>{
        if(Mode === 'white'){
          setMode('dark');
          document.body.style.backgroundColor = '#0b0c2a';
          document.body.style.color = 'white';
          showAlert("Dark Mode Enabled","success");
          
        }
        else{
          setMode('white');
          document.body.style.backgroundColor = 'white';
          document.body.style.color = 'black';
          showAlert("Light Mode Enabled","success");
        }
    }

  return (
    <>
    {/* <Router> */}
    <Navbar mode={Mode} toggleButton={toggleButton}/>
    <Alert alert= {alert}/>
      <div className="container my-3">
      {/* <Routes>
          <Route exact path="/about" element={ <About />}/>
          <Route exact path="/" element = {<Textform mode={Mode}/>}/>
          </Routes> */}
          {/* <About /> */}
          <Textform mode={Mode}/>
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
