/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component ,useEffect, useState } from "react";
import Axios from 'axios';

/*function ValidacionSingUp(props){
    const [name,setname] = useState(props);
    const [flastname, setflastname] = useState (props);
    const [slastname, setslastname] = useState(props);
    const [password, setpassword] = useState(props);
    const [email, setemail] = useState(props);
    const [NickName, setNickName] = useState(props);
    const [workposition, setworkposition] = useState(props);
    const [userlist, setuserlist] = useState([]);

    useEffect(()=>{
        Axios.get("http://localhost:3001/api/get").then((response)=> {
            setuserlist(response.data)
        });
    },[]);

    const submitReview = () =>{
        Axios.post("http://localhost:3001/api/insert", {
            name : name,
            flastname : flastname,
            slastname : slastname,
            email : email, 
            password : password,
            NickName: NickName, 
            workposition:workposition,
            });
            
            setuserlist([
            ...userlist, 
            {name: name, NickName:NickName},
            ]);
        };
};*/

export default class SignUp extends Component {
    render() { 
      // eslint-disable-next-line react-hooks/rules-of-hooks
        const [name, setname] = useState ("");
     // eslint-disable-next-line react-hooks/rules-of-hooks
         const [flastname, setflastname] = useState ("");
    // eslint-disable-next-line react-hooks/rules-of-hooks
         const [slastname, setslastname] = useState("");
    // eslint-disable-next-line react-hooks/rules-of-hooks
         const [password, setpassword] = useState("");
    // eslint-disable-next-line react-hooks/rules-of-hooks
         const [email, setemail] = useState("");
    // eslint-disable-next-line react-hooks/rules-of-hooks
         const [NickName, setNickName] = useState("");
    // eslint-disable-next-line react-hooks/rules-of-hooks
        const [workposition, setworkposition] = useState("");
    // eslint-disable-next-line react-hooks/rules-of-hooks
        const [userlist, setuserlist] = useState([]);

    // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(()=>{
           Axios.get("http://localhost:3001/api/get").then((response)=> {
                setuserlist(response.data)
            });
        },[]);

        const submitReview = () =>{
            Axios.post("http://localhost:3001/api/insert", {
                name : name,
                flastname : flastname,
                slastname : slastname,
                email : email, 
                password : password,
                NickName: NickName, 
                workposition:workposition,
                });
            
                setuserlist([
                ...userlist, 
                {name: name, NickName:NickName},
                ]);
            };

        return (
            <form className="form-group my-2">
                <h3>Sign Up</h3>

                <div className="form-group my-2">
                    <label>Nombre</label>
                    <input name= "name" type="text" className="form-control" placeholder="Nombre" onChange={(e)=> {setname(e.target.value)}}/>
                </div>

                <div className="form-group">
                    <label>Apellido Paterno</label>
                    <input type="text" className="form-control" placeholder="Apellido Paterno" onChange={(e)=> {setflastname(e.target.value)}} />
                </div>

                <div className="form-group">
                    <label>Apellido Materno</label>
                    <input type="text" className="form-control" placeholder="Apellido Materno" onChange={(e)=> {setslastname(e.target.value)}} />
                </div>

                <div className="form-group">
                    <label>Correo</label>
                    <input type="email" className="form-control" placeholder="Correo " onChange = {(e)=>{setemail(e.target.value)}}/>
                </div>

                <div className="form-group">
                    <label>Cargo</label>
                    <input type="password" name="password" className="form-control" placeholder="Cargo"  onChange={(e)=> {setworkposition(e.target.value)}}/>
                </div>

                <div className="form-group">
                    <label>Contraseña</label>
                    <input type="password" className="form-control" placeholder="Ingrese Contraseña" onChange= {(e)=>{setpassword(e.target.value)}}/>
                </div>

                <div className="form-group">
                    <label>NickName</label>
                    <input type="NickName" name="nickName" className="form-control" placeholder="Nickname" onChange={(e)=> {setNickName(e.target.value)}}/>
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={submitReview} >Registrar</button>
                <p className="forgot-password text-right">
                    Ya Registrado <a href="#">¿iniciar sesión?</a>
                </p>
            </form>
        );
    }
}