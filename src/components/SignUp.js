/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component  } from "react";
import { BrowserRouter as Link } from "react-router-dom";
import Login from "./Login";
/*import Axios from 'axios';  ,useEffect, useState*/

export default class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            campo: {},
            error : {},
            enviado: false
        }
        //this.handleChangeInput = this.handleChangeInput.bind(this);
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
            error["email"]= "Introduca un E-mail valido.";
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
        // validacion no correcta de formulario 
        /*if (typeof campo["Nombre"] !== "undefined"){
            let sololetra = campo["Nombre"].lastIndexOf('[a-zA-Z ]+$');
            let numero = campo["Nombre"].lastIndexOf('0123456789')
            if (sololetra === numero && campo["Nombre"].indexOf('0123456789')===true) {
                SingValidado = false;
                error["Nombre"] = "Introduzca un nombre valido";
            }
        }*/
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
        if(this.validadarSingUp()){
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
            __html: '<div class="alert-succes mt-3" role="alert">Registro Exitoso</div>'
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

    /*handleChangeInput (evento){
        // descontruye los valores enviados por el metodo onChange de cad input
        const {name, value} = evento.target.value;
        let regex = new RegExp("[a-zA-Z ]+$");

        if (regex.test(value)){
            console.log(name,value);
            this.setState({
                //al elemento dentro de [] es una key de cada parametro dentro del estado
                [name]: value
            });
        } else {
            console.log("invalido")
        }
    }*/

    render() { 
        return (
            <form className="form-group my-2" onSubmit={this.enviarSing.bind(this)}>
                <h3>Sign Up</h3>

                <div className="form-group my-2">
                    <label>Nombre</label>
                    <input name= "Nombre" type="text" id="Nombre" className="form-control" placeholder="Nombre" 
                        onChange = {this.detectarCambio.bind(this, "Nombre")} value={this.state.campo["Nombre"] || ''}  />
                    <span style={{color:"red"}}>{this.state.error["Nombre"]}</span>
                </div>

                <div className="form-group">
                    <label>Apellido Paterno</label>
                    <input id = "ApellidoPa" type="text" className="form-control" placeholder="Apellido Paterno" 
                        onChange={this.detectarCambio.bind(this,"ApellidoPa")} value={this.state.campo["ApellidoPa"] || ''}/>
                    <span style={{color:"red"}}>{this.state.error["ApellidoPa"]}</span>
                </div>

                <div className="form-group">
                    <label>Apellido Materno</label>
                    <input id="ApellidoMa" type="text" className="form-control" placeholder="Apellido Materno" 
                        onChange={this.detectarCambio.bind(this, "ApellidoMa")} value={this.state.campo["ApellidoMa"] || ''}/>
                    <span style={{color:"red"}}>{this.state.error["ApellidoMa"]}</span>
                </div>

                <div className="form-group">
                    <label>Correo</label>
                    <input id= "email" type="text" className="form-control" placeholder="Correo" 
                        onChange={this.detectarCambio.bind(this, "email")} value={this.state.campo["email"] || ''}/>
                    <span style={{color:"red"}}>{this.state.error["email"]}</span>
                </div>

                <div className="form-group">
                    <label>Cargo</label>
                    <input id="Cargo" type="text" name="workposition" className="form-control" placeholder="Cargo" 
                        onChange={this.detectarCambio.bind(this, "Cargo")} value={this.state.campo["Cargo"] || ''}/>
                    <span style={{color:"red"}}>{this.state.error["Cargo"]}</span>
                </div>

                <div className="form-group">
                    <label>Contraseña</label>
                    <input id="password" type="password" className="form-control" placeholder="Ingrese Contraseña" 
                        onChange={this.detectarCambio.bind(this, "password")} value={this.state.campo["password"] || ''} />
                    <span style={{color:"red"}}>{this.state.error["password"]}</span>
                </div>

                <div className="msgok" dangerouslySetInnerHTML={this.mensajeEnviado()} />

                <button type="submit" className="btn btn-primary btn-block" >Registrar</button>
                <p className="forgot-password text-right">
                    Ya Registrado <Link to={`/login/${Login}`}><a href="#">¿iniciar sesión?</a></Link>
                </p>
            </form>
        );
    }
}