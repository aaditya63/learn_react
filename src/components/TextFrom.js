import React,{useState} from 'react'

// console.log(useState("Here is new text"));

export default function TextFrom(props) {
    const clicked = ()=>{
        console.log("button is clicked");
        setText(text.toUpperCase());
    }
    const onchangefunc = (e)=>{
        console.log("Changing textarea");
        setText(e.target.value);
    }
    const clicked2 = ()=>{
        setText(text.toLowerCase());
    }
    const [text,setText] = useState("");
    return (
    <>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <label htmlFor="MyTextBox" className="form-label">{props.subheading}</label>
            <textarea  placeholder="Enter Any String to Convert into Capital letters" className="form-control" onChange={onchangefunc} value={text} id="Text Box" rows="5"></textarea>
        </div>
        <button className='btn btn-primary' onClick={clicked}>Convert to upper case</button>
        <br /><br />
        <button className='btn btn-primary' onClick={clicked2}>Convert to Lower case</button>
    </>
  );
}
