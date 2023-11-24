import React from "react";

import {
  BrowserRouter,
  Routes as ReactDomRoutes,
  Route,
} from "react-router-dom";

import Layout from "../components/Layout/Layout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Products from "../pages/Products/Products";
import Contact from "../pages/Contact/Contact";

const Routes = () => {
  return (
    <BrowserRouter>
        <Layout>
          <ReactDomRoutes>

            <Route path='/' element={<Home />} />

            <Route path='/about' element={<About />} />

            <Route path='/tienda' element={<Products />} />

            <Route path='/contacto' element={<Contact />} />

            <Route path='*' element={<p>Error</p>} />

          </ReactDomRoutes>
        </Layout>
    </BrowserRouter>
  );
};

export default Routes;
