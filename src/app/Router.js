import { BrowserRouter, Routes,Route } from "react-router-dom";
import Items from "../components/Items";
import Home from "../pages/Home";
import Layout from "./Layout";
import ItemsDetallePro from "../pages/ItemsDetallePro";

const Router = () => {// navegador por pagina

return (
    
    <BrowserRouter>
        <Routes>   
            <Route element={<Layout />}>
                <Route path="/DesafioReact"  element={<Home />} />
                <Route path='/producto/:detalleID' element={<ItemsDetallePro />} />
                <Route path='/categoria/:categoriaID' element={<Items />} />{/*filtro de remera o zapatillas*/}
                <Route path="*" element={<div>Error 404</div> } /> {/*Pagina error si no se encuentra la pagina correspondiente*/}
            </Route>
        </Routes>
    </BrowserRouter>
)};

export default Router;