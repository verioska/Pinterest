import React from 'react'
import '../Cards/Cards.css'

function Cards(props){
    return(
        <div >
            <img className="img" onClick={()=>props.imgClick(props.url)}
            src={props.url}></img>
            
        </div>
        )
}
export default Cards; 