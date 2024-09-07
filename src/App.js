import React from 'react'; 
import { BrowserRouter as Router, Route, Routes,} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Hero from './hero';
import Navbar from './navbar';
import Listapp from './Listapp';

 

function App() {
  return (
    
 <>

 <Router>

  <Routes>
    {/* <Route path="/" element={<Home/>} /> */}
    <Route path="/about" element={<About/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path='/hero' element ={<Hero/>}/>
    <Route path='/' element = {<Navbar/>}/>
    <Route path='/list' element={<Listapp/>}/>    
    <Route path='/home' element={<Home/>}/>    

  </Routes>
 </Router>
 </>
  );
}

export default App;
