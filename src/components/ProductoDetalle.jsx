import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProductoDetalle() {
  const { id } = useParams(); // Obtener el ID del producto de los parámetros de la URL
  const [producto, setProducto] = useState(null);
  const [mensajes, setMensajes] = useState([]);
  const [nuevoMensaje, setNuevoMensaje] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductoYMensajes = async () => {
      try {
        const productoResponse = await axios.get(`http://localhost:3307/api/productos/${id}`);
        setProducto(productoResponse.data);
        const mensajesResponse = await axios.get(`http://localhost:3307/api/productos/${id}/mensajes`);
        setMensajes(mensajesResponse.data);

        setLoading(false);
      } catch (err) {
        setError('Error al cargar la información del producto o los mensajes.');
        setLoading(false);
        console.error('Error:', err);
      }
    };

    fetchProductoYMensajes();
  }, [id]); // Re-ejecutar el efecto si el ID cambia

  const handleMensajeSubmit = async (e) => {
    e.preventDefault();
    if (!nuevoMensaje.trim()) return;

    try {
      // Enviar nuevo mensaje
      // CAMBIO: Usar puerto 3307
      const response = await axios.post(`http://localhost:3307/api/productos/${id}/mensajes`, {
        texto: nuevoMensaje,
      });
      // Añadir el nuevo mensaje al estado local
      setMensajes([...mensajes, response.data]);
      setNuevoMensaje(''); // Limpiar el campo de entrada
    } catch (err) {
      console.error('Error al enviar el mensaje:', err);
      alert('Error al enviar el mensaje. Inténtalo de nuevo.');
    }
  };

  if (loading) {
    return <div className="text-center p-4">Cargando producto...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center p-4">{error}</div>;
  }

  if (!producto) {
    return <div className="text-center p-4">Producto no encontrado.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-8">
      <h1 className="text-3xl font-bold mb-4">{producto.nombre}</h1>
      <p className="text-2xl text-pink-600 mb-6">${producto.precio}</p>

      <img
        src={producto.imagen}
        alt={producto.nombre}
        className="w-full h-80 object-cover rounded-md mb-6"
      />

      <h2 className="text-2xl font-semibold mb-3">Mensajes de los clientes</h2>
      {mensajes.length > 0 ? (
        <div className="space-y-3 mb-6">
          {mensajes.map((mensaje) => (
            <p key={mensaje.id} className="bg-gray-100 p-3 rounded-md">
              {mensaje.texto}
            </p>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 mb-6">No hay mensajes para este producto aún.</p>
      )}

      <h2 className="text-2xl font-semibold mb-3">Deja tu mensaje</h2>
      <form onSubmit={handleMensajeSubmit} className="flex flex-col gap-4">
        <textarea
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
          rows="4"
          placeholder="Escribe tu mensaje aquí..."
          value={nuevoMensaje}
          onChange={(e) => setNuevoMensaje(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="bg-pink-500 text-white px-6 py-3 rounded-md hover:bg-pink-600 transition duration-300"
        >
          Enviar Mensaje
        </button>
      </form>
    </div>
  );
}

export default ProductoDetalle;