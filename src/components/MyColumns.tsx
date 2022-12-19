import { TrashFill, PencilSquare } from "react-bootstrap-icons";

export default function MyColumns(props:any) {

	let totalHt:number = props.order.nbJours * props.order.tjmHt;

	function ttc(ht:number, tva:number):number {
		return ht * ((100 + tva) / 100);
	}
	/* JSX ne veut qu'un seul élément parent 
	si pb affichage DOM => <Fragment> ou <>*/
	return (
		<>
			<td><PencilSquare /> <TrashFill /></td>
			<td>{ props.order.id }</td>
			<td>{ props.order.client }</td>
			<td>{ props.order.typePresta }</td>
			<td>{ props.order.nbJours }</td>
			<td>{ props.order.tjmHt }</td>
			<td>{ props.order.tva }%</td>
			<td>{ totalHt }</td>
			<td>{ ttc(totalHt, props.order.tva) }</td>
			<td>{ props.order.comment }</td>
			<td className={ props.order.status }>{ props.order.status }</td>
		</>
		)
}