import React from "react";
import {Grid}from '@material-ui/core';
import {makeStyles}from '@material-ui/core/styles';
import Navbar from '../components/Navbar';
import 'fontsource-roboto';
import '../assets/css/DashBoard.css';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import RestoreIcon from '@mui/icons-material/Restore';
import CardsHaeder from "../components/CardsHaeder";
import Cards from '../components/Cards';
import Graphics from '../components/Graphics';
import TablaMaterial from '../components/TablaMaterial';

const useStyles = makeStyles(()=>({
  root: {
    flexGrow: 1,
  },
  iconos:{
    color: 'white', 
  },
  container: {
    paddingTop: '40px',
    alignItems: 'center'
  },
  containerGrafica:{
    marginTop : '40px'
  },
  containerTabla:{
    marginTop : '40px'
  }
}));

const data = [
  {
    id:1,
    video:
      "Poliza de Gestion de obras publicas",
    fecha: "6 de sep. 2020",
    numero: 32,
    estado:"Cierre",
    imagen: require("../assets/img/split.webp"),
  },
  {
    id:2,
      video:
        "Contruccion de nueva Avenida",
      fecha: "5 de sep. 2020",
      numero: 31,
      estado:"Solicitado",
      imagen: require("../assets/img/error.webp"),
    },
    {
    id:3,
      video:
        "Hospital de achachical",
      fecha: "4 de sep. 2020",
      numero: 21,
      estado: "Finalizado",
      imagen: require("../assets/img/forever.webp"),
    },
];

function DashBoard(props) {
  const classes = useStyles ();
  return (
    <div className = {classes.root} >
      <Grid container spacing = {3}>
        <Grid item xs= {12}>
          <Navbar/>
        </Grid>

        <Grid item xs= {12} sm={4} md={4} lg={4} xl={4}>
          <CardsHaeder icono={<SupervisorAccountIcon className={classes.iconos}/>} titulo="Administrador" texto="Usuarios" color="rgba(255,127,0,1)" font="white"/>
        </Grid> 
        <Grid item xs= {12} sm={4} md={4} lg={4} xl={4}>
          <CardsHaeder icono={<RestoreIcon className={classes.iconos}/>} titulo="Polizas" texto="Cierres" color="rgba(255,127,0,1)" font="white"/>
        </Grid> 
        <Grid item xs= {12} sm={4} md={4} lg={4} xl={4}>
          <CardsHaeder icono={<RestoreIcon className={classes.iconos}/>} titulo="Polizas" texto="Ejecucion" color="rgba(255,127,0,1)" font="white"/>
        </Grid> 

        <Grid container spacing={1} className={classes.container} item xs ={12} sm={12} md={6} lg={6} xl={6}>
          <Grid item xs ={12} sm={6} md={6} lg={6} xl={6}>
            <Cards titulo="Polizas Solicitadas" texto="130"/>
          </Grid>
          <Grid item xs ={12} sm={6} md={6} lg={6} xl={6}>
            <Cards titulo="Polizas Aprobadas" texto="50"/>
          </Grid>
          <Grid item xs ={12} sm={6} md={6} lg={6} xl={6}>
            <Cards titulo="Polizas Rechazadas" texto="60"/>
          </Grid>
          <Grid item xs ={12} sm={6} md={6} lg={6} xl={6}>
            <Cards titulo="Polizas Cerradas" texto="30"/>
          </Grid>
        </Grid>
        <Grid item xs={0} sm={0} md={1} lg={1} xl={1}></Grid>

           <Grid item xs={12} sm={12} md={5} lg={5} xl={5} className={classes.containerGrafica}>
              <Graphics />
            </Grid>

            <Grid item xs={12}  className={classes.containerTabla}>
              <TablaMaterial data={data}/>
            </Grid>

      </Grid>
    </div>
  );
}

export default DashBoard;