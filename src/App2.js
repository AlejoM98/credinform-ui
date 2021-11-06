import React, {useState ,useEffect} from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
//New contributor Jhonny Carvajal
function App() {

  const [username, setusername] = useState ("");
  const [password, setpassword] = useState("");
  const [fname, setfname] = useState("");
  const [workposition, setworkposition] = useState("");
  const [userlist, setuserlist] = useState([]);

  const [newUserName, setnewUserName]  = useState("");

  useEffect(()=>{
    Axios.get("http://localhost:3001/api/get").then((response)=> {
      setuserlist(response.data)
    });
  },[]);
  
  const submitReview = () =>{
    
    Axios.post("http://localhost:3001/api/insert", {
      username:username, 
      password:password, 
      fname:fname, 
      workposition:workposition,
    });
    
    setuserlist([
      ...userlist, 
      {username: username, fname:fname},
    ]);
  };

  const deleteuser = (mention) => {
    Axios.delete(`http://localhost:3001/api/delete/${mention}`);
  };

  const updateUser = (ment) => {
    Axios.put("http://localhost:3001/api/update" , {
      username:ment, 
      workposition:newUserName,
    });
    setnewUserName("")
  };

  return (
    <div className = "container">
      <div className="App">
      <h1> REGISTRO CREDINFORM</h1>
      
      <div className = "form">
        <label>Nombre de usuario</label>
        <input 
          type = "text" 
          name = "username" 
          onChange={(e)=> {
            setusername(e.target.value)
          }}
        />
        <label>Contraseña</label>
        <input 
          type = "password" 
          name = "password" 
          onChange={(e)=>{
            setpassword(e.target.value)
          }}
        />
        <label>Nombre Completo</label>
        <input 
          type = "text" 
          name = "Fname" 
          onChange={(e)=>{
            setfname(e.target.value)
          }}
        />
        <label>Cargo</label>
        <input 
          type = "text" 
          name = "workposition" 
          onChange={(e)=>{
            setworkposition(e.target.value)
          }}
        />
        
        <button className= "button" onClick = {submitReview}>Registar</button>

        {userlist.map((val) => {
          return (
          <div className = "grid">  
            <div className = "card">
              <h3>{val.username}</h3>  
              <p>{val.workposition}</p>


              <button className = "buttonD" 
                onClick = {() => {
                  deleteuser(val.username)
                  }}
              >Borrar</button>

              <input type = "text" id="updateInput" onChange= {(e) => {
                  setnewUserName(e.target.value);
              }}/> 
              <button className= "buttonU" onClick = {() => {updateUser(val.username)}} >Editar</button>
              </div>
            </div>
            );
        })}
      </div>
      </div>
    </div>
  );
}

export default App;
