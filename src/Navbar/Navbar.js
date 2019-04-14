import React from 'react'
import '../Navbar/Navbar.css'



function Navbar(props){
    return(
        <div className="menu">
            <navbar className="navbar" >
                <url className="list">
                    <i class="fab fa-pinterest"></i>
                    <input className="search" placeholder="buscar"></input>
                    <a className="home">Inicio</a>
                    <a className="next">Siguiendo</a>
                    <a className="user">Verioska</a>
                    <i class="fas fa-comment-dots"></i>
                    <i class="fas fa-bell"></i>
                    <i class="fas fa-ellipsis-h"></i>
                </url>
            </navbar>
        </div>
        )
}
export default Navbar; 