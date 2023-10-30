import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './components/Shop/Shop.jsx';
import Inventory from './components/Inventory/Inventory.jsx';
import Home from './components/Layout/Home';
import Orders from './components/Orders/Orders';

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <App/>,
  // },
  //  {
  //   path: "/",
  //   element: <Home/>,
  {

    path: "/",
    element: <Home/>,
 
  children:[
   
    {
      path: "/",
      element: <Shop/>,
   
    },
    {
      path: "/order",
      element:<Orders/>,
    },
    {
      path: "/inventory",
      element:<Inventory/>
    },
  ]
},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
     <RouterProvider router={router} />
  </>
)

 