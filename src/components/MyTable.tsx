import MyColumns from "./MyColumns";
import '../scss/MyTable.scss';

export default function MyTable(props:any) {

	let headers = ['Actions', 'Num Client', 'Client', 'Type Presta', 'Nb Jours', 'TJM HT', 'TVA', 'TOTAL HT', 
								 'TOTAL TTC', 'Commentaire', 'Statut'];

	return (
		<div className="MyTable">
			<table>
				<thead>
					<tr>
						{
							headers.map((hd:any, i:number) => <th key={ i } >{ hd }</th>)
						}
					</tr>
				</thead>
				<tbody>
					{
						props.orders.map((order:any) => <tr key={ order.id }><MyColumns order={ order } modifState={ props.modifState } delete = { props.delete } /></tr>)
					}
				</tbody>
			</table>
		</div>
	);
}