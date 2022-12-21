import React from "react";

// dles gestionnaires d'erreur sont des composants classes...
// ils doivent définir au moins une méthodes 
// statique "componentDidCatch" "getDerivedStateFromError"
export default class ErrorBoundary extends React.Component<any, any> {

	constructor(props:any) {
		super(props);
		this.state = {hasError: false};
	}

	static getDerivedStateFromError(error:any) {
		//on met à jour l'état afin que le prochain rendu affiche l'UI de remplacement
		return { hasError: true };
	}

	render() {
		if(this.state.hasError) {
			return <h1>Ca sent le brulé...</h1>
		}
		return this.props.children;
	}
}