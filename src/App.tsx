import './App.scss';
import MyTable from './components/MyTable';
import { ThemeContext } from './components/ThemeContext';

// on va chercher l'énum pour éviter les erreurs de frappe etc
//import { StateOrders } from './enums/StateOrders';
// bibliothèque axios pour les appels d'API 
import axios from 'axios';
// hooks de React + state 
import { useState, useEffect } from 'react';
/* typage des Orders */
import Orders from './Interfaces/IOrders';
/* redirection */
import { useNavigate } from 'react-router-dom';
import MonSlot from './components/Slot';
/* pour redux */
import { useSelector } from 'react-redux';
import { selectCount } from './redux/counterSlice';

function App() {

  /* useSelector permet de récupérer la valeur du store */
  const count = useSelector(selectCount);

  /* on crée un state pour toutes les variables qui doivent provoquer
    une mise à jour de l'affichage quand elles changent */
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
  /* navigation */
  const navigate = useNavigate(); 

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
  function ajouter() {
    navigate('/orderadd');
  }

  if(orders === null) return <div>Oups</div>
  else if(isLoading) return <div>Chargement en cours</div>
  else return (
    <div className="App">
      <ThemeContext.Provider value="dark">
        <h1>Liste des Orders</h1>
         <MyTable orders={ orders } modifState = { modifState } delete = { deleteOrder } />
         <button className="btn btn-primary" onClick={ ajouter }>Ajouter</button>
      </ThemeContext.Provider >
      <MonSlot>
        <span>Je teste un Slot</span>
        <h3>Toujours dans mon Slot</h3>
        <h4>{ count }</h4>
      </MonSlot>
    </div>
  );
}

export default App;
/*
https://github.com/public-apis/public-apis
https://geo.api.gouv.Fr*/