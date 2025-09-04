import { useState, useEffect } from "react";
import Filtros from "./Filtros.jsx";
import ListaProductos from "./ListaProductos.jsx";
import axios from 'axios'; 

function AppFiltro() {
  const [productos, setProductos] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todos");
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);   

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/producto');
        setProductos(response.data); 
        setLoading(false); 
      } catch (err) {
        setError('Error al cargar los productos desde el servidor.'); 
        setLoading(false); 
        console.error('Error al cargar los productos:', err);
      }
    };

    fetchProductos();
  }, []); 

  let productosFiltrados;
  if (categoriaSeleccionada === "Todos") {
    productosFiltrados = productos;
  } else {
    
    productosFiltrados = productos.filter((p) => p.categoria === categoriaSeleccionada);
  }

  if (loading) {
    return <div className="text-center p-4">Cargando productos...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center p-4">{error}</div>;
  }

  return (
    <div>
      <Filtros onFiltroChange={setCategoriaSeleccionada} />
      <ListaProductos productos={productosFiltrados} />
    </div>
  );
}

export default AppFiltro;