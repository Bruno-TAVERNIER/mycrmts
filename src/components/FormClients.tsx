import { useState } from 'react';
import { StateClients } from '../enums/StateClients';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
 
export default function FormClient(props:any) {
	// récupération id si modif
	let action:string;
	if(isNaN(props.client.id)) action="add";
	else action = "edit";
	// pour les formulaires, il faut toujours au moins un state
	const [client, setClient] = useState(props.client);
	// pour la navigation
	const navigate = useNavigate();
	function modifClient(event:any) {
		setClient({...client, [event.target.name] : event.target.value});
		console.log(client);
	}
	function modifClientNum(event:any) {
		setClient({...client, [event.target.name] : parseInt(event.target.value)});
		console.log(client);
	}

	function submitForm(event:any)
	{
		event.preventDefault(); //empecher la soumission html et le rechargement de la page
		console.log(client);
		if(action==='add') {
			//Ajout API
			axios.post('http://localhost:3004/clients', client)
			.then((response) => {
				console.log(response);
				navigate('/clientslist'); //retour à la liste
			});
		}
		else if(action==='edit') {
			axios.put('http://localhost:3004/clients/'+ client.id, client)
			.then(response2 => {
				console.log(response2);
				navigate('/clientslist');
			})
		}
	}
	return (
		<form onSubmit={ submitForm } >
			<p className="form-group">
				<label>Client</label>
				<input className="form-control" type="text" name="nom" value={ client.nom } onInput={ modifClient } />
			</p>
			<p className="form-group">
				<label>Total CA HT</label>
				<input className="form-control" type="number" name="totalCaHt" value={ client.totalCaHt } onInput={ modifClientNum } />
			</p>
			<p className="form-group">
				<label>Taux TVA</label>
				<input className="form-control" type="number" name="tva" value={ client.tva } onInput={ modifClientNum } />
			</p>
			<p className="form-group">
				<label>Commentaire</label>
				<textarea  className="form-control" name="comment" value={ client.comment } onInput={ modifClient } ></textarea>
			</p>
			<p className="form-group">
				<label>Statut</label>
				<select className="form-control" defaultValue={ client.status } name="status" onChange={ modifClient }>
					{
						Object.values(StateClients).map((status, index) => <option key={ index } className={ status } >{ status }</option>)
					}
				</select>
			</p>
			<p>
				<button type="submit" className="btn btn-primary">Ajouter</button>
			</p>
		</form>
	)
}