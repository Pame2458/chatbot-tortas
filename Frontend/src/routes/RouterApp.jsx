import { Route, Routes } from "react-router-dom";
import Categorias from "../components/Categorias";
import MostrarLista from "../components/Productos" 
import Admin from "../components/Admin";
import Home from "../components/Home";
import Layout from "../components/Layout";
export  const RouterApp = ()=>{
    return(
        <>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="/categorias" element={<Categorias/>}/>
                <Route index element={<Home/>}/>
                <Route path="/productos" element={<MostrarLista/>}/>
                <Route path="/admin" element={<Admin/>}/>
            </Route>
        </Routes>

        </>
    );
};