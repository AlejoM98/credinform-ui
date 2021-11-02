import React from "react";
import './FromAdPo.css';
import Kanban from '../components/Kanban.js';
import {Link} from "react-router-dom";

const FormAdPo= () =>(
        <section className = "FromAdPo">
            <div>
                <h1>Poliza</h1>
                <div className="form-group">
                    <label>Poliza Nro.</label>
                    <input type="text" className="form-control" placeholder= "CLP-123432648478230"/>
                </div>
                <div className="form-group">
                    <label>Afianzado</label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Direccion</label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Zona</label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Telefono</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label>E-mail</label>
                    <input type="email" className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Celular</label>
                    <input type="tel" className="form-control" placeholder ="+591 XXXXXXXX"/>
                </div>
                <div className="form-group">
                    <label>NIT</label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Actividad</label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Distrito</label>
                    <input type="text" className="form-control" placeholder = "La Paz"/>
                </div>
                <div className="form-group">
                    <label>Fecha inicio</label>
                    <input type="date" className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Fecha Final</label>
                    <input type="date" className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Detalle</label>
                    <input type="texto" className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Estado</label>
                    <input type="text" className="form-control"/>
                </div>
            </div>
            <Link to={`/kanban/${Kanban}`}>
                <button className="button add-button">Adicionar</button>
            </Link>
            <Link to={`/kanban/${Kanban}`}>
             <button className="button cancel-button" >Cancelar</button>
            </Link>
            
        </section>
)
export default FormAdPo

/*onClick={() => this.setEditing(false)}*/ 