/* import React from "react";
import { Navigate, Link } from "react-router-dom";
import AuthService from "../../services/users";

class Login extends React.Component {
  constructor(props){
      super(props)
      this.state = {email: '', password:'', submitDone:false}
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event){
      this.setState({[event.target.name]: event.target.value})
  }

  async handleSubmit(e){
      e.preventDefault();
      if (!this.state.email || !this.state.password) {
          console.log('Fields required!')
      } else {
          console.log('Submitted!')
          console.log(this.state.email, this.state.password)
          try {
              await AuthService.login(
                  this.state.email,
                  this.state.password
              )    
              this.setState({submitDone:true})
          } catch (error) {
              return console.log(error)
          }
      }
  }

  render(){
      return (
          <div className="container h-75 pb-5 d-flex flex-column align-items-between justify-content-center">
              <div>
                  <h2 className="mb-5">Log In</h2>
                  <form className="mb-3" onSubmit={this.handleSubmit}>
                      <div className="d-flex flex-column justify-content-around">
                          <label className="row m-3">
                              <p className="col-6">E-mail:</p>
                              <input className="col-6" name="email" type='text' value={this.state.email} onChange={this.handleChange} />
                          </label>
                          <label className="row m-3">
                              <p className="col-6">Contraseña:</p>
                              <input className="col-6" name="password" type='password' value={this.state.password} onChange={this.handleChange} />
                          </label>
                      </div>
                      <button className="mt-4" type="submit">Acceder</button>
                  </form>
                  <Link to='/register'>¿No tienes una cuenta?</Link>
                  {this.state.submitDone && <Navigate to='/perfil'/>}
              </div>
          </div>
      )
  }

}


export default Login;
 */

import React from 'react';
import { Link, Navigate } from "react-router-dom";
import AuthService from "../../services/users";


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { user: '', password: '', isLogged: false };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const res = AuthService.login(this.state.user, this.state.password)
        if (res) {
            this.setState({ isLogged: true })
        } else {
            alert('Datos incorrectos o usuario invalido.')
        }
        // AuthService.login(this.state.user, this.state.password).then(res => {
        //     if(res) {
        //         this.setState({isLogged: true})
        //     } else {
        //         alert('Datos incorrectos o usuario invalido.')
        //     }
        // })
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const { isLogged } = this.state;
        return (
            <div>
                {isLogged && (
                    <Navigate to="/perfil" replace={true} />
                )}
                <h2>Login</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Correo Electronico
                            <input
                                name='user' value={this.state.user} onChange={this.handleChange} required type="text" className="form-control" placeholder="Enter your User">
                            </input>
                        </label>
                        <br></br><br></br>
                        <label>Contraseña
                            <input
                                name='password' value={this.state.password} onChange={this.handleChange} required type="password" className="form-control" placeholder="Enter your Password">
                            </input>
                        </label>
                    </div>
                    <br></br>
                    <div className='d-flex flex-row'>

                        <button type="submit" className="btn btn-primary margin-right-7">Login</button>
                        <Link to="/register">Registrarse</Link>
                    </div>
                </form>
            </div>
        );
    }
}
export default Login;