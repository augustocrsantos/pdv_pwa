import React from 'react';
import ReactDOM from 'react-dom/client';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './View/Controller/Login';
import CadastroProduto from './View/CRUD/CadastroProduto';
import Vendas from './View/Controller/Vendas';
import Relatorio from './View/Controller/Relatorio';
import ClsBancoDados from './ClsBancoDados';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const clsDB: ClsBancoDados = new ClsBancoDados();

const router = createBrowserRouter([
  {
    path:"/",
    element:<Login></Login>
  },
  
  {
    path:"cadastroproduto",
    element:<CadastroProduto clsDB={clsDB}></CadastroProduto>
  },
  {
    path:"vendasitens",
    element:<Vendas clsDB={clsDB}></Vendas>
  },
  {
    path:"relatorio",
    element:<Relatorio clsDB={clsDB}></Relatorio>
  },
 
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
