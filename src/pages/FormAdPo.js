import React from "react";
import './FromAdPo.css';

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
                <label>Telefono</label>
                <input type="text" className="form-control" />
            </div>
            <div className="form-group">
                <label>Celular</label>
                <input type="tel" className="form-control" placeholder ="+591 XXXXXXXX"/>
            </div>
            <div className="form-group">
                <label>Actividad</label>
                <input type="text" className="form-control"/>
            </div>
            <div className="form-group">
                <label>Distrito</label>
                <input type="text" className="form-control" placeholder = "La Paz"/>
            </div>
        </div>
        <button className="button add-button">Adicionar</button>
        <button className="button cancel-button" onClick={() => this.setEditing(false)}>Cancelar</button>
    </section>
)
export default FormAdPo