/* composant de type Slot => Sert essentiellement pour de l'affichage UI */
export default function MonSlot(props:any) {
	/* tout ce qui sera entre <MonSlot> et </Monslot> sera injecté dans props.children */
	return (
		<div className="MonSlot">{ props.children }</div>
	)
}