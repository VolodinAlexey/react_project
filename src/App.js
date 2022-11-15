import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import NaviBar from './Components/Navibar';
import {Home} from './Components/Home';
import {About} from './Components/About';
import {Capability} from './Components/Capability';
import {Documents} from './Components/Documents';
import {Price} from './Components/Price';
import Footer from './Components/Footer';


function App() {
  return (
    <>

{/* div для Footer */}
<div className="page-container">
  <div className='content-wrap'>
        <Router>
        <NaviBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Capability" element={<Capability />} />
          <Route path="/Documents" element={<Documents />} />
          <Route path="/Price" element={<Price />} />
        </Routes>
        </Router>
  </div>

   {/* Рабочий Footer */}
    {/* <Footer /> */}
</div>

</>
);
}

export default App;



{/* <Router>
    <NaviBar />
    <Switch>
      <Route exact path="/" component={Home}  />
      <Route path="/Users" component={Users} />
      <Route path="/About" component={About} />
    </Switch>
    </Router> */}
