import React from "react";
import { Link } from "react-router-dom";

import { Navigate } from "react-router-dom";

class RegMascota extends React.Component {
  constructor(props) {
    super(props);
    this.state = {nombre:"", tipo:"", sexo:"" submitDone: false }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
}

handleChange(event){
    if (event.target.type == 'radio') {
        console.log(event.target.data)
    }
    this.setState({[event.target.name]: event.target.value})
}

handleSubmit(e){
    e.preventDefalut();
    console.log('Submitted!')
    console.log(this.state.nombre, this.state.tipo)
    this.setState({submitDone: true})   
}

render() {
    return (
        <div>
            <form>
            <div className="container d-flex flex-column align-items-between justify-content-center" >
                        <label className="row m-2">
                            <p className="col-6">Nombre:</p>
                            <input className="col-6" name="nombre" type='text' required value={this.state.nombre} onChange={this.handleChange} />
                        </label>
                        <label className="row m-2">
                            <p className="col-6">tipo:</p>
                            <input className="col-6" tipo="tipo" type='text' required value={this.state.tipo} onChange={this.handleChange} />
                        </label>
                        <label className="row m-2">
                            <p className="col-6">sexo:</p>
                            <input className="col-6" name="sexo" type='radio' required value={this.state.embra} onChange={this.handleChange} />
                        </label>
                </div>
            </form>
        </div>

    )
  }
}        