import { TrashFill, PencilSquare } from "react-bootstrap-icons";
/* enum pour le select */
import { StateOrders } from "../enums/StateOrders";
/* le state pour modifier l'affichage du select */
//import { useState } from 'react';

export default function MyColumns(props:any) {

	/* le state, la fonction pour le changer, et la valeur par défaut */
	/*const [status, chgStatus] = useState(props.order.status);*/

	let totalHt:number = props.order.nbJours * props.order.tjmHt;

	function ttc(ht:number, tva:number):number {
		return ht * ((100 + tva) / 100);
	}
	/*function modifState(event:any) {
		return chgStatus(event.target.value);
	}*/
	/* JSX ne veut qu'un seul élément parent 
	si pb affichage DOM => <Fragment> ou <>*/
	/* https://github.com/Bruno-TAVERNIER/mycrmts */
	return (
		<>
			<td><PencilSquare /> <TrashFill onClick={ () => { props.delete(props.order.id) }  }/></td>
			<td>{ props.order.id }</td>
			<td>{ props.order.client }</td>
			<td>{ props.order.typePresta }</td>
			<td>{ props.order.nbJours }</td>
			<td>{ props.order.tjmHt }</td>
			<td>{ props.order.tva }%</td>
			<td>{ totalHt }</td>
			<td>{ ttc(totalHt, props.order.tva) }</td>
			<td>{ props.order.comment }</td>
			<td className={ props.order.status }>
				<select value={ props.order.status } onChange={ (event) => props.modifState(event, props.order) }>
					{
						Object.values(StateOrders).map((status, index) => <option key={ index } className={ status } >{ status }</option>)
					}
				</select>
			</td>
		</>
		)
}