import React,{useState} from 'react'

// console.log(useState("Here is new text"));

export default function TextFrom(props) {
    const clicked = ()=>{
        if(text.length < 1)
            props.alertfunc("warning","Text Field is Empty!");
        setText(text.toUpperCase());
    }
    const onchangefunc = (e)=>{
        console.log("Changing textarea");
        setText(e.target.value);
    }
    const clicked2 = ()=>{
        if(text.length < 1)
            props.alertfunc("warning","Text Field is Empty!");
        setText(text.toLowerCase());
    }
    const fetchemail = ()=>{
        em = "";
        li = "";
        console.log(em)
        console.log(li)
        let a = text.split(" ");
        let links = []
        let emails = []
        a.forEach((item)=>{
            if(item.length>4 && item.slice(item.length-4) == ".com"){
                let isemail = false;
                for(let i=0;i<item.length;i++){
                    if(item[i] == "@"){
                        isemail = true;
                        break;
                    }
                }
                if(isemail)
                    emails.push(item);
                else links.push(item);
            }
        })
        console.log(links)
        console.log(emails)
        links.forEach((item,i)=>{
            if(i == 0)
                updateem(`${item}`);
            else updateem(`${em}, ${item}`);
                
        })
        emails.forEach((item,i)=>{
            if(i==0)
                updateli(`${item}`);
            else updateli(`${li}, ${item}`);
        })
        props.alertfunc("success","Emails and Links are extracted");
    }
    const clearfunc = ()=>{
        setText("");
        updateem("0 Found");
        updateli("0 Found");
        props.alertfunc("success","Data Clered");
    }


    let [text,setText] = useState("");
    let [em,updateem] = useState("0 Found");
    let [li,updateli] = useState("0 Found");

    function funcupdate(){
        let a = text.split(" ");
        let count = 0;
        for(let item of a){
            if(item.length > 0)
                count++;
        }
        return count;
    }

    return (
    <>  
        <div style={{backgroundColor:`${props.isblack == true ? "black":"white"}`}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <label htmlFor="MyTextBox" className="form-label">{props.subheading}</label>
            <textarea  placeholder="Enter Any String to Convert into Capital letters" className="form-control" onChange={onchangefunc} value={text} id="Text Box" rows="5" style={{backgroundColor:`${props.isblack == true ? "black":"white"}`}}   ></textarea>
        </div>
        <button className='btn btn-primary mx-1' onClick={clicked}>Convert to upper case</button>
        <button className='btn btn-primary mx-1' onClick={clicked2}>Convert to Lower case</button>
        <button className='btn btn-primary mx-1' onClick={fetchemail}>Extract Data</button>
        <button className='btn btn-primary mx-1' onClick={clearfunc}>Clear Data</button>
        <br />
        <p>Count of Words : {funcupdate()} & Count of Characters : {text.length}</p>
        <h3>All Links</h3>
        <p>{li}</p>
        <h3>All Emails</h3>
        <p>{em}</p>
        </div>
    </>
  );
}