/* composant sous forme de classe */

import React from 'react';
import logo from '../logo.svg';
//import du scss
import '../scss/MyHeader.scss';
import { useSelector } from 'react-redux';
import { selectCount } from '../redux/counterSlice';

export default class MyHeader extends React.Component<any, any> {
	// un composant classe peut avoir un constructeur pour recevoir des propriétés
		/*titre!:string; /* !: = nullable */
	/*	punch!:string; */
	state:any = {};
	constructor(props:any) {
			super(props);
			/*this.titre = props.titre;
			this.punch = props.punch;*/
			//pour pouvoir utiliser this dans une fonction, il faut la binder
			this.increment = this.increment.bind(this);
			this.state = { count: 0, count2: 0, count3: 0 };
	}
	count:number = 0;

	increment() {
		//on n'a pas accès directement au state en modification this.state.count++;
		//modification directe via setState
		this.setState({ count: this.state.count + 1 });
		console.log(this.state.count);
	}
	/* fonction fléchée => pas de binding */
	increment2 = () => {
		/* modification avec fonction traditionnelle (doit avoir un return) */
		this.setState(function(state:any) { return {count2: ++state.count2 }});
	}
	increment3 = () => {
		// modification du state avec fonction fléchée (doit avoir un return)
		this.setState((state:any) => ({ count3: ++state.count3 }));
	}

	/* hook de création */
	componentDidMount(): void {
			// le composant est chargé et affiché
			console.log('composant affiché et pret');
	} 
	// hooks de mise à jour
	shouldComponentUpdate(nextProps: Readonly<any>, nextState: Readonly<any>, nextContext: any): boolean {
			console.log('composant peut être mis à jour ?');
			return true; // si false, pas de mise à jour
	}
	componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any): void {
			console.log('composant mis à jour');
	}
	// hook de destruction 
	componentWillUnmount(): void {
			console.log('le composant va être détruit');
	}


	// un composant classe doit obligatoirement afficher quelque chose avec un render
	// obligatoirement un return pour du JSX. Attention il faut quelque chose sur la même lique que le return d'ou '('
	render() {
		return (
			<header>
				<img src={ logo } alt="mon logo" />
				<div>
					<h1>{ this.props.titre }</h1>
					<h2>{ this.props.punch }</h2>
					<button onClick={ this.increment }>{ this.state.count }</button>
					<button onClick={ this.increment2 }>{ this.state.count2 }</button>
					<button onClick={ this.increment3 }>{ this.state.count3 }</button>
				</div>
			</header>
		)
	}
}