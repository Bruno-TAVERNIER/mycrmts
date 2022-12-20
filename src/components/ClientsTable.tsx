
import ClientsColumns from "./ClientsColumns";

export default function ClientTable(props:any) {

	let headers = ['Actions', 'Num Client', 'Client', 'TVA', 'TOTAL CA HT',
							 	 'Commentaire', 'Statut'];
	
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
						props.clients.map((client:any) => <tr key={ client.id }><ClientsColumns client={ client } modifState={ props.modifState } delete = { props.delete } /></tr>)
					}
				</tbody>
			</table>
		</div>
	);
}