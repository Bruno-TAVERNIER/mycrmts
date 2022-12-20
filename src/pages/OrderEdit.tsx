/* récupérer dans l'api l'order voulu 
et l'afficher dans le formulaire FormOrder */
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Orders from '../Interfaces/IOrders';
import { useState, useEffect } from 'react';
import FormOrder from '../components/FormOrder';

export default function OrderEdit() {

	let params = useParams();  //récupération des paramètres url
	let initOrder: Orders = {}; //objet par défaut
	const [order, setOrder] = useState(initOrder); // state pour gérer la mise à jour de l'affichage
	const [isLoaded, loader] = useState(false);
	console.log(params.id);
	
	//hook useEffect
	useEffect(() => {
		//récupérer avec axios/fetch le bon order
		axios.get('http://localhost:3004/orders/' + params.id)
		.then((response) => {
			console.log(response);
			setOrder(response.data);
			loader(true);
		})
		.catch(error =>  {
			console.log(error);
		});
	}, []);

	//injection de l'order dans les props du formulaire

	if(isLoaded) return (
		<div className="OrderEdit">
			<h1>Edit an order</h1>
			<p><FormOrder order={ order } /></p>
		</div>
	)
	else return <div>Chargement en cours</div>
}