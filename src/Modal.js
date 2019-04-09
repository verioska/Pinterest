import React from 'react'
import './Modal.css'


function Modal(props){
    return(
        <div className="modalpadre" onClick={(e)=>{
            if(e.target.getAttribute("class")==="modalpadre"){
                props.cerrarmodal()
            }



        }}>
            <div className="modalhijo">
            <img  src={props.verimg}></img>
            </div>
            
        </div>
        )
}
export default Modal; 