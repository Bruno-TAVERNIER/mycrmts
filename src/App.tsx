import './App.scss';
import MyTable from './components/MyTable';
// on va chercher l'énum pour éviter les erreurs de frappe etc
//import { StateOrders } from './enums/StateOrders';
// bibliothèque axios pour les appels d'API 
import axios from 'axios';
// hooks de React + state 
import { useState, useEffect } from 'react';
/* typage des Orders */
import Orders from './Interfaces/IOrders';

function App() {

  const [orders, setOrders] = useState(null);
  const[isLoading, loader] = useState(true); //pour l'affichage une fois chargé

  /* sur chargement ou mise à jour */
  useEffect(() => {
    axios.get('http://localhost:3004/orders')
    .then(response => {
      setOrders(response.data);
      loader(false);
    })
  }, [isLoading]);

  /*let orders:any = [
    {id: 1, nbJours: 1, tva: 20, status: StateOrders.OPTION, typePresta: 'Formation', client: 'M2I',tjmHt: 1200, comment: 'Merci' },
    {id: 2, nbJours: 5, tva: 20, status: StateOrders.CONFIRMED, typePresta: 'Formation', client: 'XYZ',tjmHt: 1200, comment: 'Merci' },
    {id: 3, nbJours: 10, tva: 20, status: StateOrders.CANCELED, typePresta: 'Formation', client:'ABC',tjmHt: 800, comment: 'Youpee' },
  ]*/
  function modifState(event:any, order:Orders) {
   /* console.log(event.target.value);
    console.log(id);*/
    let newStatus:any = event.target.value;
    /*axios.get('http://localhost:3004/orders/' + id)
    .then(response =>  {
      order = response.data;
      order.status = newStatus;
      axios.put('http://localhost:3004/orders/' + id, order)
      .then(response2 => {
        console.log(response2);
        loader(true); // mise à jour affichage via useState
      })
    });*/
    axios.put('http://localhost:3004/orders/' + order.id, {...order, status: newStatus})
      .then(() => loader(true));
  }
  /* effacer un order */
  function deleteOrder(id:number) {
    // effacer dans l'API l'élément dont l'id est demandé
    axios.delete('http://localhost:3004/orders/' + id)
    .then(response => {
      console.log(response);
      loader(true); //récup nouvelle liste + mise à jour affichage
    });
  }

  if(orders === null) return <div>Oups</div>
  else if(isLoading) return <div>Chargement en cours</div>
  else return (
    <div className="App">
      <MyTable orders={ orders } modifState = { modifState } delete = { deleteOrder } />
      <button className="btn btn-primary">Ajouter</button>
    </div>
  );
}

export default App;
