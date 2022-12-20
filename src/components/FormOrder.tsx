import { useState } from 'react';
import { StateOrders } from '../enums/StateOrders';
import Orders from '../Interfaces/IOrders';
import axios from 'axios';
 
export default function FormOrder() {
	let initOrder: Orders = {client: '', tjmHt: 0, tva: 0, typePresta: '', nbJours: 0, comment: '', status: StateOrders.OPTION}; //uniquement pour l'ajout, sinon order en fonction  de son id
	const [order, setOrder] = useState(initOrder);
	function modifOrder(event:any) {
		setOrder({...order, [event.target.name] : event.target.value});
		console.log(order);
	}
	function modifOrderNum(event:any) {
		setOrder({...order, [event.target.name] : parseInt(event.target.value)});
		console.log(order);
	}

	function submitForm(event:any)
	{
		event.preventDefault(); //empecher la soumission html et le rechargement de la page
		console.log(order);
		//Ajout à jour API
		axios.post('http://localhost:3004/orders', order)
		.then((response) => {
			console.log(response);
		});
	}
	return (
		<form onSubmit={ submitForm } >
			<p className="form-group">
				<label>Client</label>
				<input className="form-control" type="text" name="client" value={ order.client } onInput={ modifOrder } />
			</p>
			<p className="form-group">
				<label>Type de Prestation</label>
				<input className="form-control" type="text" name="typePresta" value={ order.typePresta } onInput={ modifOrder } />
			</p>
			<p className="form-group">
				<label>Nombre de Jours</label>
				<input className="form-control" type="number" name="nbJours" value={ order.nbJours } onInput={ modifOrderNum } />
			</p>
			<p className="form-group">
				<label>Taux journalier HT</label>
				<input className="form-control" type="number" name="tjmHt" value={ order.tjmHt } onInput={ modifOrderNum } />
			</p>
			<p className="form-group">
				<label>Taux TVA</label>
				<input className="form-control" type="number" name="tva" value={ order.tva } onInput={ modifOrderNum } />
			</p>
			<p className="form-group">
				<label>Commentaire</label>
				<textarea  className="form-control" name="comment" value={ order.comment } onInput={ modifOrder } ></textarea>
			</p>
			<p className="form-group">
				<label>Statut</label>
				<select className="form-control" defaultValue={ order.status } name="status" onChange={ modifOrder }>
					{
						Object.values(StateOrders).map((status, index) => <option key={ index } className={ status } >{ status }</option>)
					}
				</select>
			</p>
			<p>
				<button type="submit" className="btn btn-primary">Ajouter</button>
			</p>
		</form>
	)
}