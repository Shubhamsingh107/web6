import React from 'react'
import Navbar1 from './Navbar1';
import Footer from './Footer';
import salman from '../salman.jpeg';

export default function 
() {
  return (
    <>
    <Navbar1 />
    <div>
<img className='photo' src={salman} alt="image" />
        <ul className='used'>  <h4 className='adjust'>As a Service Engineer  </h4>
        <li >Proficient on Hydraulic CNC Press Brake Machine <img className='size' src="https://ravimachines.com/wp-content/uploads/2016/07/hydraulic-press-brake-machines-3.png" alt="Machine" /></li>

        <li>Proficiency in Maintenance of 800Ton Hydraulic Press Machine <img className='size' src="https://sc01.alicdn.com/kf/HTB1_2tMLXXXXXbdXpXXq6xXFXXXW/228821361/HTB1_2tMLXXXXXbdXpXXq6xXFXXXW.jpg_.webp" alt="machine" /></li>

        <li>CNC Pipe Bending Machine <img className='photo3' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmWHXUIFO8CMQjYeS9tmcZ2N1h-fRyh5WejA&usqp=CAU" alt="photo" /></li>
        </ul>
    </div>
    <Footer />
    </>
  )
}
