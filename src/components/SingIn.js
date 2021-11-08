import React, { Component } from "react";
import '../assets/css/SingIn.css';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.email = React.createRef();
    this.password = React.createRef();
  }
 
  componentDidMount() {
    window.scrollTo(0, 10);
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const email = this.email.current.value;
    const password = this.password.current.value;
    console.log(email, password);
    if(email === 'carlospalacios@credinformsa.com' && password === 'cmontes21' ){
        //TODO Conectar con la BD
        console.log('EXITO!!');
        //Ir a Kanban
        localStorage.setItem('miVar','Alejandro')
        window.location.href = 'http://localhost:3000/kanban';
    }else{
      console.log('ÉRROR');
      //Mostrar un mensaje debajo 
    }
    if(email === 'josemantilla@credinformsa.com' && password === 'jmantilla21' ){
        //TODO Conectar con la BD
        console.log('EXITO!!');
        //Ir a Kanban
        localStorage.setItem('miVar','Alejandro')
        window.location.href = 'http://localhost:3000/kanban2';
    }else{
      console.log('ÉRROR');
      //Mostrar un mensaje debajo 
    }
    if(email === 'ronaldperalta@credinformsa.com' && password === 'rchavarria21' ){
        //TODO Conectar con la BD
        console.log('EXITO!!');
        //Ir a Kanban
        localStorage.setItem('miVar','Alejandro')
        window.location.href = 'http://localhost:3000/kanban1';
    }else{
      console.log('ÉRROR');
      //Mostrar un mensaje debajo 
    }
    if(email === 'carlosfernandez@credinformsa.com' && password === 'cfernandez21' ){
        //TODO Conectar con la BD
        console.log('EXITO!!');
        //Ir a Kanban
        localStorage.setItem('miVar','Alejandro')
        window.location.href = 'http://localhost:3000/kanban1';
    }else{
      console.log('ÉRROR');
      //Mostrar un mensaje debajo 
    }
  };

  render() {
    return (
      <section className="section-conten padding-y">
        <div className="card-login">
          <div className="card-body">
            <h4 className="card-title mx-4">Sign in</h4>
            <form
              onSubmit={(e) => {
                this.handleSubmit(e);
              }}
            >
              {/* <a href="/#" className="btn btn-facebook btn-block mb-2"> <i className="fab fa-facebook-f" style={{ marginRight: '0.5em' }}></i> Inicia sesión con facebook</a>
                            <a href="/#" className="btn btn-google btn-block mb-4"> <i className="fab fa-google" style={{ marginRight: '0.5em' }}></i> Inicia sesión con Google</a> */}
              <div className="form-group col-md-7">
                <input
                  ref={this.email}
                  name=""
                  className="form-control"
                  placeholder="Correo electrónico"
                  type="email"
                />
              </div>
              <div className="form-group col-md-7">
                <input
                  ref={this.password}
                  name=""
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  type="password"
                />
              </div>

              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block">
                  Login
                </button>
              </div>
              <div style={{ textAlign: "center", color: "red" }}>
                {/*authError ? <b>{authError}</b> : null*/}
              </div>
            </form>
          </div>
        </div>
        <br />
        <br />
      </section>
    );
  }
}

export default (SignIn);