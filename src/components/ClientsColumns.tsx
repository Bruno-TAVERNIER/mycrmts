import { TrashFill, PencilSquare } from "react-bootstrap-icons";
/* enum pour le select */
import { StateClients } from "../enums/StateClients";
/* le state pour modifier l'affichage du select */
//import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ClientColumns(props:any) {
return (
		<>
			<td><Link to={ '/clientedit/' + props.client.id }><PencilSquare /></Link> <TrashFill onClick={ () => { props.delete(props.client.id) }  }/></td>
			<td>{ props.client.id }</td>
			<td>{ props.client.nom }</td>
			<td>{ props.client.totalCaHt }</td>
			<td>{ props.client.tva }%</td>
			<td>{ props.client.comment }</td>
			<td className={ props.client.status }>
				<select value={ props.client.status } onChange={ (event) => props.modifState(event, props.client) }>
					{
						Object.values(StateClients).map((status, index) => <option key={ index } className={ status } >{ status }</option>)
					}
				</select>
			</td>
		</>
		)
}