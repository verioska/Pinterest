import React from 'react'
import '../Modal/Modal.css'


function Modal(props){
    return(
        <div className="modal1" onClick={(e)=>{
            if(e.target.getAttribute("class")==="modal1"){
                props.modalClose()
            }
        }}>
            <div className="modal2">
            <img  src={props.viewImg}></img>
           
        
            </div>
            
        </div>
        )
}
export default Modal; 