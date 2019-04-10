import React from 'react'
import '../Cards/Cards.css'

function Cards(props){
    return(
        <div className="card">
            <img onClick={()=>props.imgClick(props.url)}
            src={props.url}></img>
            
        </div>
        )
}
export default Cards; 