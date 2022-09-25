import { BrowserRouter, Routes,Route } from "react-router-dom";

import Items from "../components/Items";
import Home from "../pages/Home";
import Layout from "./Layout";
import ItemsDetallePro from "../pages/ItemsDetallePro";
import Mostrarcarrito from "../components/Mostrarcarrito";
import React from "react";

import CartProvider from "../context/CartContext";


const Router = () => {// navegador por pagina

return (
    
    <BrowserRouter>
        <CartProvider> 
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/DesafioReact"  element={<Home />} />
                    <Route path="/cart"  element={<Mostrarcarrito/>} />
                    <Route path='/producto/:detalleID' element={<ItemsDetallePro />} />
                    <Route path='/categoria/:categoriaID' element={<Items />} />{/*filtro de remera o zapatillas*/}
                    <Route path="*" element={<div className="text-center pt-2">Error 404</div> } /> {/*Pagina error si no se encuentra la pagina correspondiente*/}
                </Route>
            </Routes>
        </CartProvider>
    </BrowserRouter>
)};

export default Router;