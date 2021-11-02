/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component  } from "react";
/*import Axios from 'axios';  ,useEffect, useState*/

export default class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            campo: {},
            error : {},
            enviado: false
        }
    }

    validadarSingUp (){
        let campo = this.state.campo;
        let error = {};
        let SingValidado = true;

        // El Campo Nombre esta completo
        if (!campo["Nombre"]) {
            SingValidado = false;
            error["Nombre"]= "Introduca un Nombre.";
        } 
        //Si el campo Apellido esa con datos
        if (!campo["ApellidoPa"]) {
            SingValidado = false;
            error["ApellidoPa"]= "Introduzca un Apellido.";
        } 
        //Si el campo Apellido esa con datos
        if (!campo["ApellidoMa"]) {
            SingValidado = false;
            error["ApellidoMa"]= "Introduzca un Apellido.";
        } 
        //si el Campo esta completado
        if (!campo["email"]) {
            SingValidado = false;
            error["email"]= "Imtroduca un E-mail valido.";
        } 
        //si el Campo esta completado
        if (!campo["Cargo"]) {
            SingValidado = false;
            error["Cargo"]= "Seleccione un cargo valido";
        } 
        //si el Campo esta completado
        if (!campo["password"]) {
            SingValidado = false;
            error["password"]= "este campo no puede estar vacio";
        } 
        //si el Campo esta completado
        if (!campo["NickName"]) {
            SingValidado = false;
            error["NickName"]= "Este campo no puede estar vacio";
        }
        if (typeof campo["email"] !== "undefined"){
            let posicionArroba = campo["email"].lastIndexOf('@');
            let posicionPunto = campo["email"].lastIndexOf(".");

            if(!(posicionArroba < posicionPunto && posicionArroba > 0 && campo["email"].indexOf('@@') === -1 && posicionPunto > 2 && (campo["email"].length - posicionPunto) > 2 )){
                SingValidado = false;
                error["email"]= "Imtroduca un E-mail valido.";
            }
        }
        // seteo el mensaje de error
        this.setState({
            error: error
        });
        return SingValidado;
    };
    //Una vez que los campos del formulario han sido llenados correctamente
    //se muestra un mensaje al usuario 
    enviarSing(e) {
        e.preventDefault();
        //Si la validacion de los campos es del formulario ha sido realizada 
        if(this.validarLogin()){
            //Cambio el estado de 'enviado' a 'True'
            this.setState({
                enviado: true
            });

            //Muestro el mensaje que se encuentra en la funcion mensajEnviado
            return this.mensajEnviado();
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
            <form className="form-group my-2">
                <h3>Sign Up</h3>

                <div className="form-group my-2">
                    <label>Nombre</label>
                    <input name= "name" type="text" id="Nombre" className="form-control" placeholder="Nombre" onChange = {this.detectarCambio.bind(this, "Nombre")} value={this.state.campo["Nombre"] || ''}/>
                    <span style={{color:"red"}}>{this.state.error["Nombre"]}</span>
                </div>

                <div className="form-group">
                    <label>Apellido Paterno</label>
                    <input id = "ApellidoPa" type="text" className="form-control" placeholder="Apellido Paterno" onChange={this.detectarCambio.bind(this,"ApellidoPa")} value={this.state.campo["ApellidoPa"] || ''}/>
                    <span style={{color:"red"}}>{this.state.error["ApellidoPa"]}</span>
                </div>

                <div className="form-group">
                    <label>Apellido Materno</label>
                    <input id="ApellidoMa" type="text" className="form-control" placeholder="Apellido Materno" onChange={this.detectarCambio.bind(this, "ApellidoMa")} value={this.state.campo["ApellidoMa"] || ''}/>
                    <span style={{color:"red"}}>{this.state.error["ApellidoMa"]}</span>
                </div>

                <div className="form-group">
                    <label>Correo</label>
                    <input id= "email" type="email" className="form-control" placeholder="Correo" onchange={this.detectarCambio.bind(this, "email")} value={this.state.campo["email"] || ''}/>
                    <span style={{color:"red"}}>{this.state.error["email"]}</span>
                </div>

                <div className="form-group">
                    <label>Cargo</label>
                    <input id="Cargo" type="text" name="workposition" className="form-control" placeholder="Cargo" onchange={this.detectarCambio.bind(this, "Cargo")} value={this.state.campo["Cargo"] || ''}/>
                    <span style={{color:"red"}}>{this.state.error["Cargo"]}</span>
                </div>

                <div className="form-group">
                    <label>Contraseña</label>
                    <input id="password" type="password" className="form-control" placeholder="Ingrese Contraseña" onchange={this.detectarCambio.bind(this, "password")} value={this.state.campo["password"] || ''} />
                    <span style={{color:"red"}}>{this.state.error["password"]}</span>
                </div>

                <div className="form-group">
                    <label>NickName</label>
                    <input id="NickName" type="NickName" name="nickName" className="form-control" placeholder="Nickname" onchange={this.detectarCambio.bind(this, "NickName")} value={this.state.campo["NickNam"] || ''} />
                    <span style={{color:"red"}}>{this.state.error["NickName"]}</span>
                </div>

                <button type="submit" className="btn btn-primary btn-block" >Registrar</button>
                <p className="forgot-password text-right">
                    Ya Registrado <a href="#">¿iniciar sesión?</a>
                </p>
            </form>
        );
    }
}