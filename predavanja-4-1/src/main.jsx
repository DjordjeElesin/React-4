import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import HomePage from './pages/HomePage.jsx';
import About from './pages/About.jsx';
import Profiles from './pages/Profiles.jsx';
import SingleProfiles from './pages/SinglePage.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/profiles",
    element: <Profiles/>
  },
  {
    path: "/profiles/:profileID",
    element: <SingleProfiles/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
