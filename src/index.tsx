import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
/* routage */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
/* composants UI */
import MyHeader from './components/MyHeader';
import MyFooter from './components/MyFooter';
import MyNav from './components/MyNav';
/* composants pages */
import App from './App';
import OrderAdd from './pages/OrderAdd';
import OrderEdit from './pages/OrderEdit';
import E404 from './pages/E404';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
let titre:string = "Mon CRM";
let punch:string = 'Ma Punchline';
root.render(
  <React.StrictMode>
    <MyHeader titre={titre} punch={punch} />
    <BrowserRouter>
      <MyNav />
      <Routes>
        <Route path='/' element={ <App /> } />
        <Route path='/orderadd' element={ <OrderAdd /> } />
        <Route path='/orderedit/:id' element={ <OrderEdit /> } />
        <Route path='*' element = { <E404 /> } />
      </Routes>
    </BrowserRouter>
    <MyFooter nom="Moi" />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
