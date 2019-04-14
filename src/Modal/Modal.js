import React from 'react'
import '../Modal/Modal.css';
import Navbar from '../Navbar/Navbar';



function Modal(props){
    return(
        <div className="modal1" onClick={(e)=>{
            if(e.target.getAttribute("class")==="modal1"){
                props.modalClose()
            }
        }}>
            <Navbar/>
            <div className="arrow">
                <i class="fas fa-chevron-left" ></i>
            </div>
            <div className="modal2">
                <header className="header">
                    <i class="fas fa-ellipsis-h"></i>
                    <div className="button">
                        <button className="btn1"><i class="fas fa-upload"></i> Enviar</button>
                        <button className="btn2"><i class="fas fa-thumbtack"></i> Guardar</button>
                    </div>
                </header> 

                <div className="imgDiv">
                    <img className="imgModal" src={props.viewImg}></img>
                </div>
                
                <div className="container">
                    <h1 className="tittle">Fotos y comentarios</h1>
                    <div className="section">
                        <button className="btnPhoto">Fotos</button>
                        <button className="p">Comentarios</button>
                    </div>
                    <div className="parrafo">
                        <p className="parrafo2" >¿Has probado este Pin? Añade una<br></br> foto para mostrar cómo ha ido </p>
                        <hr></hr>
                    </div>
                    <i class="far fa-user"></i>
                    <i class="fas fa-thumbtack pushpin"> 79</i>
                    <div class="user">
                        <p className="p_1">Camila</p> 
                        <p className="p_2">ha guardado en</p>
                        <p className="p_3">Pets</p>
                    </div>
                {/* <div>
                    <button className="photo">Añadir un<br></br>foto</button>
                </div> */}
                </div>
            </div>
    </div>
  
    )
}
export default Modal; 