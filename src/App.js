import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';
import About from './components/About';
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
  return (
    <>
    <Navbar title="Aaditya" aboutText ="asdfasdfasd" isblack = {isblack} changeblack = {changeblack}/>
    <div className="container">
      <TextFrom heading="This is New form" subheading="Form is just made for you!" isblack = {isblack}/>
    </div>
    </>
  );
}

export default App;