import React, { useState } from 'react'
import Navbar1 from './Navbar1';
import Footer from './Footer';

export default function ContactUs() {

  const [userName1, setuserName1] = useState("")


  const [pass1, setPass1] = useState("")
  


  const userName=(user)=>{
   console.log(user);
   setuserName1(user.target.value) 
  }
  const userPass=(pass)=>{
console.log(pass);
setPass1(pass.target.value) 
  }

  let submit=()=>{
console.log(userName1);
console.log(pass1);
  }

  return (
    <div>
    <Navbar1 />
    <div className="bgForm">
    <div className="contact">
      <form action="post" method="get" >
       <div className="row1"> Username :-<input type="Your Name" onChange={userName} placeholder='Enter Your User Name'  required /></div>
        <div className="row2"> Password :-<input type="password" onChange={userPass} className="row2" minLength={6} placeholder='Enter Your Password ' id=""  required/></div>
        <div className="row3"> D.O.B :- <input placeholder='date' type="date" /></div>
        <button onClick={submit}>Submit</button>
      </form>
      </div>
      </div>
      <Footer />
    </div>
  )
}
