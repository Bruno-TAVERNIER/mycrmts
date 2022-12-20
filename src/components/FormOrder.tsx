import { useState } from 'react';
import { StateOrders } from '../enums/StateOrders';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
 
export default function FormOrder(props:any) {
	// récupération id si modif
	let action:string;
	if(isNaN(props.order.id)) action="add";
	else action = "edit";
	// pour les formulaires, il faut toujours au moins un state
	const [order, setOrder] = useState(props.order);
	// pour la navigation
	const navigate = useNavigate();
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
		if(action==='add') {
			//Ajout API
			axios.post('http://localhost:3004/orders', order)
			.then((response) => {
				console.log(response);
				navigate('/'); //retour à la liste
			});
		}
		else if(action==='edit') {
			axios.put('http://localhost:3004/orders/'+ order.id, order)
			.then(response2 => {
				console.log(response2);
				navigate('/');
			})
		}
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