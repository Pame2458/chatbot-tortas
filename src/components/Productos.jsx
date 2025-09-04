import React from "react";
import ListaProductos from "./ListaProductos";
import productos from "../productos";


function MostrarLista() {
  return <ListaProductos productos={productos} />;
}

export default MostrarLista
