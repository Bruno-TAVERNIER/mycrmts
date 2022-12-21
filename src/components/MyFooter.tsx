/* composant sous forme de fonction */

// pour utiliser le state
import { useState, useEffect } from 'react';
/* pour redux 
	useSelector pour récupérer la valeur du store
	useDispatch pour utiliser une fonction du store
	il faut importer les valeurs et les fonctions depuis le store
*/
import { useSelector, useDispatch } from 'react-redux';
import { selectCount, increment, decrement, incrementByAmount, incrementAsync } from '../redux/counterSlice';

export default function MyFooter(props:any) {

	/* dans une constante on défini la variable, la fonction qui permet de la modifier et la valeur initiale */
	const [count, setCount] = useState(0);

	// récupération du store
	const compteur = useSelector(selectCount);
	/* création d'un dispatcheur */
	const dispatch = useDispatch<any>();

	// fonction de traitement du click
	function btnClick() {
		setCount(count + 1);
	}

	// hoot useEffect = componentDidMount + componentDidUpdate
	useEffect( () => {
		console.log('chargé ou mis à jour');
	});  // ou useEffect( () => {...}, []); pour componentDidMount
	const incrementValue = Number(5);
	let date = new Date().getFullYear();
	// un composant "fonction" doit obligatoirement retourner du JSX
	// pour rappel un lien vers les mentions légales est obligatoire aussi
	return (
		<footer>
			Copyright &copy; { date } - { props.nom } - { compteur }
			<button onClick={ btnClick }>{ count }</button>
			<button onClick={ () => dispatch( increment() ) }>Store++</button>
			<button onClick={ () => dispatch( decrement() ) }>Store--</button>
			<button onClick={ () => dispatch( incrementByAmount(incrementValue) ) }>Store+5</button>
			<button onClick={ () => dispatch( incrementAsync(3)) }>Store +3 async</button>
		</footer>
	)
}