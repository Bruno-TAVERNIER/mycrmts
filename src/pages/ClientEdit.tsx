import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FormClient from '../components/FormClients';
import Clients from '../Interfaces/IClients';
import axios from 'axios';

export default function ClientEdit() {
	
	const params = useParams();
	console.log(params.id);
	// id = mode edit ou add
	let initClient: Clients = {}; //objet par défaut
	const [client, setClient] = useState(initClient); // state pour gérer la mise à jour de l'affichage
	const [isLoaded, loader] = useState(false);
	console.log(params.id);
	
	//hook useEffect
	useEffect(() => {
		if(params.id !== undefined) {
					//récupérer avec axios/fetch le bon client
			axios.get('http://localhost:3004/clients/' + params.id)
			.then((response) => {
				console.log(response);
				setClient(response.data);
				loader(true);
			})
			.catch(error =>  {
				console.log(error);
			});
		}
		else loader(true);
	}, []);

	//injection de l'order dans les props du formulaire

	if(isLoaded) return (
		<div className="ClientEdit">
			<h1>Edit a client</h1>
			<p><FormClient client={ client } /></p>
		</div>
	)
	else return <div>Chargement en cours</div>
}