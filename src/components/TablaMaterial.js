/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow}from '@material-ui/core';
import {withStyles}from '@material-ui/core/styles';

function TablaMaterial(props){
    const StyledTableCell = withStyles(()=>({
        head: {
            color: 'white',
            textAlign: 'center',
            background: 'black',
        },
        body: {
            fontSize: 18,
            color:props.font,
        }
        }))(TableCell);

    return(
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Polizas</StyledTableCell>
                        <StyledTableCell>Fecha de Documento </StyledTableCell>
                        <StyledTableCell>Numero Poliza</StyledTableCell>
                        <StyledTableCell>Estado</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.data.map(elemento => (
                        <TableRow key = {elemento.id}>
                            <TableCell><img src= {elemento.imagen} with = "35px" height="25px"/>{"  "}{elemento.video}</TableCell>
                            <TableCell align="center">{elemento.fecha}</TableCell>
                            <TableCell align="center">{elemento.numero}</TableCell>
                            <TableCell align="center">{elemento.estado}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default TablaMaterial;