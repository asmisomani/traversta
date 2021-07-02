import React from 'react'
import ReactDOM from "react-dom"
import "./modals.css"
export default function Modal(props) {
if(!props.open){
    return null;
}
    return ReactDOM.createPortal(<>
        <div className="overlay"></div>
        <div className="modal-style">
            {props.children}
        </div>
        </>,
        document.getElementById("portal")
    )
}
