import FormOrder from "../components/FormOrder";
import Orders from "../Interfaces/IOrders";
import { StateOrders } from "../enums/StateOrders";

export default function OrderAdd() {
	let initOrder: Orders = {client: '', tjmHt: 0, tva: 0, typePresta: '', nbJours: 0, comment: '', status: StateOrders.OPTION}; //uniquement pour l'ajout, sinon order en fonction  de son id
	return (
		 <div className="container OrderAdd">
			<h1>Add an Order</h1>
			<FormOrder order={ initOrder }/>
		</div>
	)
}