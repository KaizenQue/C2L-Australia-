/* eslint-disable no-undef */
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "leaflet/dist/leaflet.css";
import React from "react";
import HomePage from "./Components/Home/HomePage"
import Footer from "./Components/Footer"
import Service from "./Components/ServiceOverview/ServiceOverview"
import SubService from './Components/SubService/SubService';
import About from './Components/AboutUs/About';
import ContactUs from "./Components/ContactUs/ContactUs"
import MassTort from './Components/MassTort/MassTort';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {


  const router = createBrowserRouter([

    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/Service',
      element:
        <ParallaxProvider>
          <Service />
        </ParallaxProvider>
      ,
    },
    {
      path: '/SubService',
      element: <SubService />
    },
    {
      path: '/About',
      element: <About />
    },
    {
      path: '/ContactUs',
      element: <ContactUs />
    },
    {
      path: '/MassTort',
      element: <MassTort />
    },
    {
      path: '/Footer',
      element: <Footer />,
    },
    {
      path: '*',
      element: <h1>404 - Page Not Found</h1>,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
