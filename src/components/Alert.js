import React from 'react'
export default function Alert(props) {          //Dislay when not null
 return (
    props.alerttxt && <div className={`alert alert-${props.alerttxt.type} alert-dismissible fade show`} role="alert">
        <strong>{props.alerttxt.type}!</strong> {props.alerttxt.msg}
        <button type="button" className="btn-close" onClick={()=>{props.setalert()}}></button>
    </div>
  )
}