import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';
import Alert from './components/Alert';
import About from './components/About';
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
    setalert({            
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
      <Navbar title="TextUtils" aboutText ="About" isblack = {isblack} changeblack = {changeblack}/>
      <Alert alerttxt = {alerttxt} setalert = {setalert}/>
      
      <TextFrom heading="This is New form" subheading="Form is just made for you!" isblack = {isblack} alertfunc = {alertfunc}/>
        <div className="container">
        <About/>
        </div>
    </>
  );
}

export default App;