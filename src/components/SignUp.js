/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import Axios from 'axios'

export default class SignUp extends Component {
    render() {
        const [username, setusername] = ("");
        const [password, setpassword] = ("");
        const [fname, setfname] = ("");
        const [workposition, setworkposition] = ("");

        const submitReview = () =>{
    
            Axios.post("http://localhost:3001/api/insert", {
            username:username, 
            password:password, 
            fname:fname, 
            workposition:workposition,
            });
        }   
        return (
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Nombre</label>
                    <input name= " username" type="text" className="form-control" placeholder="Nombre" onChange={(e)=> {setusername(e.target.value)}}/>
                </div>

                <div className="form-group">
                    <label>Apellido</label>
                    <input type="text" className="form-control" placeholder="Apellido" onChange={(e)=> {setfname(e.target.value)}} />
                </div>

                <div className="form-group">
                    <label>Correo</label>
                    <input type="email" className="form-control" placeholder="Correo " />
                </div>

                <div className="form-group">
                    <label>Cargo</label>
                    <input type="password" className="form-control" placeholder="Cargo"  onChange={(e)=> {setworkposition(e.target.value)}}/>
                </div>

                <div className="form-group">
                    <label>Contraseña</label>
                    <input type="password" className="form-control" placeholder="Ingrese Contraseña" onChange= {(e)=>{setpassword(e.target.value)}}/>
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={submitReview} >Registrar</button>
                <p className="forgot-password text-right">
                    Ya Registrado <a href="#">¿iniciar sesión?</a>
                </p>
            </form>
        );
    }
}