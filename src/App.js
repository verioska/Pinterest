import React, { Component } from 'react';
import './App.css';
import Cards from './Cards/Cards';
import Modal from './Modal'
import './Cards/Cards.css'


class App extends Component {
  constructor(){
    super();
      this.state={
      img:"",
      modal:false,
    
  }
  this.abrirmodal=this.abrirmodal.bind(this);
  this.cerrarmodal=this.cerrarmodal.bind(this);
}
abrirmodal(i){
  this.setState({
    ...this.state,
    modal:i,
  })
}
cerrarmodal(){
  this.setState({
    ...this.state,
    modal:false,
  })
}

 componentDidMount() {
  fetch("https://api.unsplash.com/search/photos?page=1&per_page=20&query=dog&client_id=3453296cbcd0ae1992d6ea9d4a5308dcdb45b3d005e8b4b57e4f9d38bda798dd")
  .then(data=>data.json())
  .then(data=>{
    let arr=data.results;
    this.setState({
      ...this.state,
      img: arr,
    })
 }); 
}

show(){
  const leer=this.state.img.map(element=>{
    return ( 
      
      <Cards hacerClick={this.abrirmodal}
        url={element.urls.thumb}
      />
      )
  })
  return leer
}

  render() {
    return (
  
      <div className="contenedr">
      {this.state.modal && <Modal cerrarmodal={this.cerrarmodal} verimg={this.state.modal}/>}
        {this.state.img && this.show()}
      </div>
      
    );
  }
}

export default App;
