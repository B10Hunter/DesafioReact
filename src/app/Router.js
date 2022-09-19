import { BrowserRouter, Routes,Route } from "react-router-dom";
import Items from "../components/Items";
import DetalleDePro from "../pages/DetalleDePro";
import Home from "../pages/Home";
import Remeras from "../pages/Remeras";
import Zapatillas from "../pages/Zapatillas";/* habia hecho dos componente que cuando toque el boton zapatillas o remera
                                            que te envie a ese componente ,pero lo saque por que lo tenia que hacer con useParams*/
import Layout from "./Layout";

const Router = () => {// navegador por pagina

return (
    
    <BrowserRouter>
        <Routes>   
            <Route element={<Layout />}>
                <Route path="/DesafioReact"  element={<Home />} />
                <Route path='/modelos/remeras' element={<Items />} />
                <Route path='/producto/' element={<DetalleDePro />} />
                <Route path='/categoria/:categoriaID' element={<Items />} />
                <Route path="*" element={<div>Error 404</div> } /> {/*Pagina error si no se encuentra la pagina correspondiente*/}
            </Route>
        </Routes>
    </BrowserRouter>
)};

export default Router;