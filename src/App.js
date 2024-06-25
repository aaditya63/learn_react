import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';
import Alert from './components/Alert';
function App() {
  const body = document.querySelector("body");
  let [isblack,setblack] = useState(false);
  const changeblack = ()=>{
    if(isblack == true){
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
  let [alerttxt,setalert] = useState(null);     //Initialize with null

  const alertfunc = (message,type) =>{
    setalert({            //Using State as an object
      msg : message,
      type : type
    });
    console.log(alerttxt);
  }


  return (
    <>
    <Navbar title="Aaditya" aboutText ="asdfasdfasd" isblack = {isblack} changeblack = {changeblack}/>
    <Alert alerttxt = {alerttxt}/>
    <div className="container">
      <TextFrom heading="This is New form" subheading="Form is just made for you!" isblack = {isblack} alertfunc = {alertfunc}/>
    </div>

    </>
  );
}

export default App;