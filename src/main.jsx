import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Users from './components/Users/Users.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import UserDetails from './components/UserDetails/UserDetails.jsx';
import Countries from './components/Countries/Countries.jsx';
import CountryDetails from './components/CountryDetails/CountryDetails.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path:'/countries',
        element: <Countries></Countries>,
        // loader: ()=> fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a'),
        loader: ()=> fetch('https://restcountries.com/v3.1/all')

      },
      {
        path: 'country/:countryCode',
        element: <CountryDetails></CountryDetails>,
        loader: ({params})=> fetch(`https://restcountries.com/v3.1/alpha/${params.countryCode}`)
      },
      {
        path:'/users',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>,
      },
      {
        path: '/user/:userId',
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element:<UserDetails></UserDetails>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
