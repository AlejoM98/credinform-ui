import React, { Component } from "react";
import './FromAdPo.css';
import Kanban from '../components/Kanban.js';
import {Link} from "react-router-dom";

export default class FormAdPo extends Component {
    constructor (props){
        super(props);
        this.state = {
            campo : {}, // la entrada de los campos para la validacion 
            error : {}, 
            enviado : false 
        }
    }
    validarForm () {
        let campo = this.state.campo;
        let error = {};
        let FormValido = true; 

        // si el campo esta completo 
        if (!campo["NroPoliza"]) {
            FormValido = false;
            error["NroPoliza"] = "el campo no puede estar vacio";
        }
        if (!campo["Afianzado"]) {
            FormValido = false;
            error["Afianzado"] = "el campo no puede estar vacio";
        }
        if (!campo["Direccion"]) {
            FormValido = false;
            error["Direccion"] = "el campo no puede estar vacio";
        }
        if (!campo["Zona"]) {
            FormValido = false;
            error["Zona"] = "el campo no puede estar vacio";
        }
        if (!campo["Telefono"]) {
            FormValido = false;
            error["Telefono"] = "el campo no puede estar vacio";
        }
        if (!campo["email"]) {
            FormValido = false;
            error["email"] = "Imtroduca un E-mail valido";
        }
        if (!campo["Celular"]) {
            FormValido = false;
            error["Celular"] = "el campo no puede estar vacio";
        }
        if (!campo["NIT"]) {
            FormValido = false;
            error["NIT"] = "el campo no puede estar vacio";
        }
        if (!campo["Actividad"]) {
            FormValido = false;
            error["Actividad"] = "el campo no puede estar vacio";
        }
        if (!campo["Distrito"]) {
            FormValido = false;
            error["Distrito"] = "el campo no puede estar vacio";
        }
        if (!campo["FecIni"]) {
            FormValido = false;
            error["FecIni"] = "el campo no puede estar vacio";
        }
        if (!campo["FecFin"]) {
            FormValido = false;
            error["FecFin"] = "el campo no puede estar vacio";
        }
        if (!campo["Detalle"]) {
            FormValido = false;
            error["Detalle"] = "el campo no puede estar vacio";
        }
        if (!campo["Estado"]) {
            FormValido = false;
            error["Estado"] = "el campo no puede estar vacio";
        }

        if (typeof campo["email"] !== "undefined"){
            let posicionArroba = campo["email"].lastIndexOf('@');
            let posicionPunto = campo["email"].lastIndexOf(".");

            if(!(posicionArroba < posicionPunto && posicionArroba > 0 && campo["email"].indexOf('@@') === -1 && posicionPunto > 2 && (campo["email"].length - posicionPunto) > 2 )){
                FormValido = false;
                error["email"]= "Imtroduca un E-mail valido.";
            }
        }
        // seto el mensaje
        this.setState({
            error : error
        });
        return FormValido;
    }
    //una vez los campos del formulario fueron llenados se muestra el mensaje al usuarios
    enviarForm(e){
        e.preventDefault();
        //si la validacion de los campos es del formulario
        if(this.validarForm()){
            this.setState({
                enviado : true
            });
            window.location.href = 'http://localhost:3000/kanban';
            //muestro el mensaje
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


    render() {
        return (
            <form className="form-group my-2" onSubmit={this.enviarForm.bind(this)} >
                <div className="row p-5">
                    <h1>Poliza</h1>
                        <div className="form-group col">
                            <label>Poliza Nro.</label>
                            <input id = "NroPoliza" type="text" className="form-control" placeholder="CLP-123432648478230" 
                                onChange={this.detectarCambio.bind(this, "NroPoliza")} value={this.state.campo["NroPoliza"] || ''} 
                            />
                            <span style={{color:"red"}}>{this.state.error["NroPoliza"]}</span>
                        </div>
                        <div className="form-group col-sm-6">
                            <label>Afianzado</label>
                            <input id = "Afianzado" type="text" className="form-control" 
                                onChange={this.detectarCambio.bind(this, "Afianzado")} value={this.state.campo["Afianzado"] || ''}/>
                            <span style={{color:"red"}}>{this.state.error["Afianzado"]}</span>
                        </div>
                        <div className="form-group col-sm-6">
                            <label>Direccion</label>
                            <input id= "Direccion" type="text" className="form-control" 
                                onChange={this.detectarCambio.bind(this, "Direccion")} value={this.state.campo["Direccion"] || ''}
                            />
                        </div>
                        <div className="form-group col-sm-6">
                            <label>Zona</label>
                            <input id = "Zona" type="text" className="form-control" 
                                onChange={this.detectarCambio.bind(this, "Zona")} value={this.state.campo["Zona"] || ''}
                            />
                            <span style={{color:"red"}}>{this.state.error["Zona"]}</span>
                        </div>
                        <div className="form-group col-sm-2">
                            <label>Telefono</label>
                            <input id = "Telefono" type="text" className="form-control" 
                                onChange={this.detectarCambio.bind(this, "Telefono")} value={this.state.campo["Telefono"] || ''}
                            />
                            <span style={{color:"red"}}>{this.state.error["Telefono"]}</span>
                        </div>
                        <div className="form-group col-sm-3">
                            <label>E-mail</label>
                            <input id = "email" type="email" className="form-control" 
                                onChange={this.detectarCambio.bind(this, "email")} value={this.state.campo["email"] || ''}
                            />
                            <span style={{color:"red"}}>{this.state.error["email"]}</span>
                        </div>
                        <div className="form-group col-sm-2">
                            <label>Celular</label>
                            <input id="Celular" type="tel" className="form-control" placeholder="+591 XXXXXXXX" 
                                onChange={this.detectarCambio.bind(this, "Celular")} value={this.state.campo["Celular"] || ''}
                            />
                            <span style={{color:"red"}}>{this.state.error["Celular"]}</span>
                        </div>
                        <div className="form-group col-md-5">
                            <label>NIT</label>
                            <input id = "NIT"type="text" className="form-control" 
                                onChange={this.detectarCambio.bind(this, "NIT")} value={this.state.campo["NIT"] || ''}
                            />
                            <span style={{color:"red"}}>{this.state.error["NIT"]}</span>
                        </div>
                        <div className="form-group col-md-6">
                            <label>Actividad</label>
                            <input id = "Actividad" type="text" className="form-control" 
                                onChange={this.detectarCambio.bind(this, "Actividad")} value={this.state.campo["Actividad"] || ''}
                            />
                            <span style={{color:"red"}}>{this.state.error["Actividad"]}</span>
                        </div>
                        <div className="form-group col-md-6">
                            <label>Distrito</label>
                            <input id = "Distrito" type="text" className="form-control" placeholder="La Paz" 
                                onChange={this.detectarCambio.bind(this, "Distrito")} value={this.state.campo["Distrito"] || ''}
                            />
                            <span style={{color:"red"}}>{this.state.error["Distrito"]}</span>
                        </div>
                        <div className="form-group col-md-3">
                            <label>Estado</label>
                            <input id = "Estado" type="text" className="form-control" 
                                onChange={this.detectarCambio.bind(this, "Estado")} value={this.state.campo["Estado"] || ''}
                            />
                            <span style={{color:"red"}}>{this.state.error["Estado"]}</span>
                        </div>
                        <div className="form-group col-md-3">
                            <label>Fecha inicio</label>
                            <input id="FecIni" type="date" className="form-control" 
                                onChange={this.detectarCambio.bind(this, "FecIni")} value={this.state.campo["FecIni"] || ''}
                            />
                            <span style={{color:"red"}}>{this.state.error["FecIni"]}</span>
                        </div>
                        <div className="form-group col-md-3">
                            <label>Fecha Final</label>
                            <input id="FecFin" type="date" className="form-control" 
                                onChange={this.detectarCambio.bind(this, "FecFin")} value={this.state.campo["FecFin"] || ''}
                            />
                            <span style={{color:"red"}}>{this.state.error["FecFin"]}</span>
                        </div>
                        <div className="form-group">
                            <label>Detalle</label>
                            <input id = "Detalle" type="texto" className="form-control" 
                                onChange={this.detectarCambio.bind(this, "Detalle")} value={this.state.campo["Detalle"] || ''}
                            />
                           <span style={{color:"red"}}>{this.state.error["Detalle"]}</span> 
                        </div>
                        <div className="msgok" dangerouslySetInnerHTML={this.mensajeEnviado()} />
                  
                        <button type="submit" className="add-button btn btn-primary btn-block col-md-1">Adicionar</button>

                        <button  type="submit" className="btn btn-primary btn-block col-md-1">Cancelar</button>
                    </div>
            </form>
        );
    }; 
}

/*onClick={() => this.setEditing(false)}  export default FormAdPo 

  <Link to={`/kanban/${Kanban}`}>*/ 