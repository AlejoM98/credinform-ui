import React from "react";
import {Line} from 'react-chartjs-2';
import '../assets/css/Graphics.css';

function Graphics(props){
    const data = {
        labels : ["Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto"],
        datasets : [
            {
                label : "Solicitudes",
                fill : false,
                backgroundColor : "rgba(255,255,200,1)",
                pointBorderColor : "rgba(255,155,234,1)",
                pointBorderWidth : 1,
                pointHoverRadius : 5,
                pointHoverBackgroundColor : "rgba(255,155,234,1)",
                pointHoverBorderColor : "rgba(255,255,200,1)",
                pointRadius : 1,
                pointHitRadius : 10,
                data : [17,19,156,357,555,400]
            },
            {
                label : "Rechazadas",
                fill : false,
                backgroundColor : "rgba(255,0,200,1)",
                pointBorderColor : "rgba(255,155,234,1)",
                pointBorderWidth : 1,
                pointHoverRadius : 5,
                pointHoverBackgroundColor : "rgba(255,155,234,1)",
                pointHoverBorderColor : "rgba(255,255,200,1)",
                pointRadius : 1,
                pointHitRadius : 10,
                data : [7,9,76,145,250,200]
            }
    ]
    }
    return(
        <div className="containerGrafica">
            <Line data={data}/>
        </div>
    );
}
export default Graphics;