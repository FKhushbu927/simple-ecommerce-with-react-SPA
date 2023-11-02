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
import cartProductsLoader from './loaders/cartProductsLoader.js';
import Checkout from './components/Checkout/Checkout';

const router = createBrowserRouter([
  {

    path: "/",
    element: <Home/>,
 
  children:[
   
    {
      path: "/",
      element: <Shop/>,
      loader: () => fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json'),
   
    },
    {
      path: "/order",
      element:<Orders/>,
      loader: cartProductsLoader,
    },
    {
      path: "/inventory",
      element:<Inventory/>
    },
    {
      path:"checkout",
      element: <Checkout></Checkout>
    },
  ]
},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
     <RouterProvider router={router} />
  </>
)

 