/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import {Link} from "react-router-dom";
import Kanban from "./Kanban";

/*import {setToken, deleteToken, getToken, initAxiosInterceptors} from './Helpers/auth-helper'; initAxiosInterceptors();*/
/*import Axios from 'axios';*/

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            campo: {},
            error : {},
            enviado: false
        }
    }

    validarLogin () {
        let campo = this.state.campo;
        let error = {};
        let loginValido = true;

        //Email si esta datos.
        if (!campo["email"]) {
            loginValido = false;
            error["email"]= "Introduca un E-mail valido.";
        }
        //Si el campo password esta con datos.
        if (!campo["password"]) {
            loginValido = false;
            error["password"]= "Porfavor ingresa tu Contraseña.";
        }
        //Valida si el formato de email es el correcto
        if (typeof campo["email"] !== "undefined"){
            let posicionArroba = campo["email"].lastIndexOf('@');
            let posicionPunto = campo["email"].lastIndexOf(".");

            if(!(posicionArroba < posicionPunto && posicionArroba > 0 && campo["email"].indexOf('@@') === -1 && posicionPunto > 2 && (campo["email"].length - posicionPunto) > 2 )){
                loginValido = false;
                error["email"]= "Imtroduca un E-mail valido.";
            }
        }
        //seteo el mensaje de error
        this.setState({
            error: error
        });
        return loginValido;
    };
    //Una vez que los campos del formulario han sido llenados correctamente
    //se muestra un mensaje al usuario 
    enviarlogin(e) {
        e.preventDefault();
        //Si la validacion de los campos es del formulario ha sido realizada 
        if(this.validarLogin()){
            //Cambio el estado de 'enviado' a 'True'
            this.setState({
                enviado: true
            });

            //Muestro el mensaje que se encuentra en la funcion mensajEnviado
            return this.mensajeEnviado();
        }
    }

    mensajeEnviado(state) {

        //la variable enviado por defecto esta en 'false' pero cuando se 
        //termina de valida los datos del formulario, la variable enviado
        //cambia a 'true'
        const enviado = this.state.enviado;

        //si el valor de la variable enviado es 'true' pues mostrmos el mensaje
        if (enviado === true) {
            return {
                __html: '<div class="alert-succes mt-3" role="alert">Inicio de sesion Exitoso</div>'
            };
        }
    };
    
    detectarCambio (field, e){
        let campo = this.state.campo;
        campo[field] = e.target.value;
        
        //Cambo de estado de cambio
        this.setState({
            campo
        });
    }

    render() {
        return (
            <form onSubmit = {this.validarLogin.bind(this)}>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Correo</label>
                    <input id="email" type="email" className="form-control" placeholder="Correo" onChange = {this.detectarCambio.bind(this, "email")} value={this.state.campo["email"] || ''}/>
                    <span style={{color:"red"}}>{this.state.error["email"]}</span>
                </div>

                <div className="form-group">
                    <label>Contraseña</label>
                    <input id="password" type="password" className="form-control" placeholder="Contraseña" onChange = {this.detectarCambio.bind(this, "password")} value={this.state.campo["password"] || ''}/>
                    <span style={{color: "red"}}>{this.state.error["password"]}</span>
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Recuerdame</label>
                    </div>
                </div>
                <Link to={`/kanban/${Kanban}`}>
                <div className="msgok" dangerouslySetInnerHTML={this.mensajeEnviado()} />
                    <button type="submit" className="btn btn-primary btn-block" >Ingresa </button>
                </Link>    
                <p className="forgot-password text-right">
                    Olvidaste tu <a href="#">contreseña ?</a>
                </p>
            </form>
        );
    }
}
