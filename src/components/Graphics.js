import React from "react";
import {Line} from 'react-chartjs-2';
import '../assets/css/Graphics.css';

function Graphics(props){
    const data = {
        labels : ["Enero","Febrero","Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
        datasets : [
            {
                label : "Solicitudes",
                fill : false,
                backgroundColor : "rgba(112, 240, 80, 1)",
                pointBorderColor : "rgba(35, 134, 11, 1)",
                pointBorderWidth : 1,
                pointHoverRadius : 5,
                pointHoverBackgroundColor : "rgba(35, 134, 11, 1)",
                pointHoverBorderColor : "rgba(112, 240, 80, 1)",
                pointRadius : 1,
                pointHitRadius : 10,
                data : [20,33,26,30,21,20,60,45,9,40,24,26]
            },
            {
                label : "Rechazadas",
                fill : false,
                backgroundColor : "rgba(158, 29, 255, 1))",
                pointBorderColor : "rgba(119, 0, 207, 1)",
                pointBorderWidth : 1,
                pointHoverRadius : 5,
                pointHoverBackgroundColor : "rgba(119, 0, 207, 1)",
                pointHoverBorderColor : "rgba(158, 29, 255, 1)",
                pointRadius : 1,
                pointHitRadius : 10,
                data : [10,23,13,15,10,15,26,25,3,20,14,16]
            }
    ]
    }

    const data2 = {
        labels : ["Enero","Febrero","Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
        datasets : [
            {
                label : "Cierres",
                fill : false,
                backgroundColor : "rgba(249, 76, 76, 1)",
                pointBorderColor : "rrgba(230, 41, 41, 1)",
                pointBorderWidth : 1,
                pointHoverRadius : 5,
                pointHoverBackgroundColor : "rgba(230, 41, 41, 1)",
                pointHoverBorderColor : "rgba(249, 76, 76, 1)",
                pointRadius : 1,
                pointHitRadius : 10,
                data : [1,3,3,5,10,15,30,25,18,0,4,6]
            },
            {
                label : "Devengadas",
                fill : false,
                backgroundColor : "rgba(230, 228, 41, 1)",
                pointBorderColor : "rrgba(255, 252, 59, 1)",
                pointBorderWidth : 1,
                pointHoverRadius : 5,
                pointHoverBackgroundColor : "rrgba(255, 252, 59, 1)",
                pointHoverBorderColor : "rgba(230, 228, 41, 1)",
                pointRadius : 1,
                pointHitRadius : 10,
                data : [3,1,2,8,5,7,40,30,22,1,3,12]
            }
    ]
    }
    return(
        <div className="row p-5">
            <div className="containerGrafica">
                <Line data={data} />
                
            </div>
            <div>              </div>
            <div className="containerGrafica">
                <Line data={data2} />
            </div>
            
        </div>
    );
    
}
export default Graphics;

/*return(
        <div className="containerGrafica2">
                <Line data={data2} />
        </div>
    ); */