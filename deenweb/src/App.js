import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/services.js';
import Careers from './components/pages/careers';
import Contactus from './components/pages/Contactus.js';
import AI from './components/pages/AI.js';
import Businessprocess from './components/pages/Businessprocess.js';
import Cybersecurity from './components/pages/Cybersecurity.js';
import Machinelearning from './components/pages/Machinelearning.js';
import Cloud from './components/pages/Cloud.js';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Services' element={<Services />} />
        <Route path='Careers' element={<Careers />} />
        <Route path='Contactus' element={<Contactus  />} />
       <Route path='AI' element={< AI/>} />
       <Route path='Cloud' element={<Cloud  />} />
       <Route path='Machinelearning' element={<Machinelearning />} />
       <Route path='Cybersecurity' element={<Cybersecurity  />} />
       <Route path='Businessprocess' element={<Businessprocess />} />
      
        </Routes>
        

      </Router>
    </>
  );

  
}

export default App;
