import './App.scss';
import MyTable from './components/MyTable';
// on va chercher l'énum pour éviter les erreurs de frappe etc
import { StateOrders } from './enums/StateOrders';

function App() {
  let orders:any = [
    {id: 1, nbJours: 1, tva: 20, status: StateOrders.OPTION, typePresta: 'Formation', client: 'M2I',tjmHt: 1200, comment: 'Merci' },
    {id: 2, nbJours: 5, tva: 20, status: StateOrders.CONFIRMED, typePresta: 'Formation', client: 'XYZ',tjmHt: 1200, comment: 'Merci' },
    {id: 3, nbJours: 10, tva: 20, status: StateOrders.CANCELED, typePresta: 'Formation', client:'ABC',tjmHt: 800, comment: 'Youpee' },
  ]
  function modifState(event:any, id:number) {
    console.log(event.target.value);
    console.log(id);
  }
  return (
    <div className="App">
      <MyTable orders={ orders } modifState = { modifState }/>
    </div>
  );
}

export default App;
