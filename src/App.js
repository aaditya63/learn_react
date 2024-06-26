import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';
import Alert from './components/Alert';
import About from './components/About';
import {BrowserRouter,Routes,Route} from "react-router-dom";
function App() {
  const body = document.querySelector("body");
  let [isblack,setblack] = useState(false);
  const changeblack = ()=>{
    if(isblack === true){
      setblack(false);
      console.log("OFF");
      body.style.backgroundColor = "white";
      body.style.color = "black";
    }
    else{
      setblack(true);
      console.log("ON");
      body.style.backgroundColor= "#303632";
      body.style.color = "White";
    }
  }
  let [alerttxt,setalert] = useState(null);    

  const alertfunc = (type,message) =>{
    setalert({            //Using State as an object
      type : type,
      msg : message,
    });
    console.log(alerttxt);
    setTimeout(()=>{
      setalert(null);
    },4000);
  }

  return (
    <>
      <BrowserRouter>
      <Navbar title="TextUtils" aboutText ="About" isblack = {isblack} changeblack = {changeblack}/>
      <Alert alerttxt = {alerttxt} setalert = {setalert}/>
      <Routes>
      <Route path='/' element={
        <TextFrom heading="This is New form" subheading="Form is just made for you!" isblack = {isblack} alertfunc = {alertfunc}/>
      }/>
      <Route path='/About' element={
        <div className="container">
        <About/>
        </div>
      }> 
      </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;