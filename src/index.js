import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  BrowserRouter as Routers,
  Routes,
  Route,
  Link
} from 'react-router-dom';


import reportWebVitals from './reportWebVitals';
import Ecosystem from "./Components/Ecosystem"
import Contact from './Components/Contact';
import Academies from './pages/Academies';
import BatManufactures from './pages/BatManufactures';
import Commentators from './pages/Commentators';
import Grounds from './pages/Grounds';
import Organisers from './pages/Organisers';
import PersonalCoaching from './pages/PersonalCoaching';
import Physio from './pages/Physio';
import Scorers from './pages/Scorers';
import Streamers from './pages/Streamers';
import Tshirts  from './pages/Tshirts ';
import Trophy from './pages/Trophy';
import Umpires from './pages/Umpires';
import Shops from './pages/Shops'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routers>
      <Routes>
        <Route path="/" element={<Ecosystem />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/academies" element={<Academies />} />
        <Route path='/BatManufactures' element=<BatManufactures/>/>
        <Route path='/Grounds' element=<Grounds/>/>
        <Route path='/Organisers' element=<Organisers/>/>
        <Route path='/PersonalCoaching' element=<PersonalCoaching/>/>
        <Route path='/Physio' element=<Physio/>/>
        <Route path='/Scorers' element=<Scorers/>/>
        <Route path='/Streamers' element=<Streamers/>/>
        <Route path='/Tshirts' element=<Tshirts/>/>
        <Route path='/Trophy' element=<Trophy/>/>
        <Route path='/Umpires' element=<Umpires/>/>
        <Route path='/Shops' element=<Shops/>/>
        <Route path='/Commentators' element=<Commentators/>/>


      </Routes>
    </Routers>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
