import React from 'react'
export default function Alert(props) {          //Dislay when not null
 return (
    props.alerttxt && <div className="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>{props.alerttxt.type}</strong> {props.alerttxt.msg}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  )
}