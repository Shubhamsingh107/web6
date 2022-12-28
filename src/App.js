import React1 from './Component/React1'
import Navbar1 from './Component/Navbar1';
import Alert1 from './Component/Alert1';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactUs from './Component/ContactUs';
import Footer from './Component/Footer.js';
import WorkExperience from './Component/WorkExperience';
import News from './Component/Components2/News';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path='/ContactUs' element={<ContactUs />} />
      <Route path='/Navbar1' element={<Navbar1 />} />
      <Route path='/' element={<Alert1 />} />
      <Route path='/React1' element={<React1 />} />
      <Route path='/Footer' element={<Footer />} />
      <Route path='/WorkExperience' element={<WorkExperience />} />
      <Route path='/News' element={<News />} />
      </Routes>
  
      </ BrowserRouter>
  </>
  );
}

export default App;
