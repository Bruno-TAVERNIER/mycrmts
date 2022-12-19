/* composant sous forme de fonction */

// pour utiliser le state
import { useState, useEffect } from 'react';

export default function MyFooter(props:any) {

	/* dans une constante on défini la variable, la fonction qui permet de la modifier et la valeur initiale */
	const [count, setCount] = useState(0);

	// fonction de traitement du click
	function btnClick() {
		setCount(count + 1);
	}

	// hoot useEffect = componentDidMount + componentDidUpdate
	useEffect( () => {
		console.log('chargé ou mis à jour');
	});  // ou useEffect( () => {...}, []); pour componentDidMount

	let date = new Date().getFullYear();
	// un composant "fonction" doit obligatoirement retourner du JSX
	// pour rappel un lien vers les mentions légales est obligatoire aussi
	return (
		<footer>
			Copyright &copy; { date } - { props.nom }
			<button onClick={ btnClick }>{ count }</button>
		</footer>
	)
}