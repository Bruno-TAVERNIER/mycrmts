import ClientsTable from "../components/ClientsTable";
import axios from 'axios';
// hooks de React + state 
import { useState, useEffect } from 'react';
/* typage des Orders */
import Clients from "../Interfaces/IClients";
/* redirection */
import { Link } from 'react-router-dom';

export default function ClientList() {
	const [clients, setClients] = useState(null);
  const[isLoading, loader] = useState(true); //pour l'affichage une fois chargé

	  /* sur chargement ou mise à jour */
		useEffect(() => {
			axios.get('http://localhost:3004/clients')
			.then(response => {
				setClients(response.data);
				loader(false);
			})
		}, [isLoading]);

		function modifState(event:any, client:Clients) {
			let newStatus:any = event.target.value;
			axios.put('http://localhost:3004/clients/' + client.id, {...client, status: newStatus})
      .then(() => loader(true));
		}
		function deleteClient(id:number) {
			// effacer dans l'API l'élément dont l'id est demandé
			axios.delete('http://localhost:3004/clients/' + id)
			.then(response => {
				console.log(response);
				loader(true); //récup nouvelle liste + mise à jour affichage
			});
		}
	
	if(clients === null) return <div>Oups</div>
  else if(isLoading) return <div>Chargement en cours</div>
  else return (
    <div className="App">
      <ClientsTable clients={ clients } modifState = { modifState } delete = { deleteClient } />
      <Link to='/clientadd' className='btn btn-primary'>Ajouter</Link>
    </div>
  );
}