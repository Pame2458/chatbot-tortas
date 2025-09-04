// ListaProductos.jsx
function ListaProductos({ productos = []}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {productos.length > 0 ? (
        productos.map((producto) => (
          <div
            key={producto.id}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1">{producto.nombre}</h3>
              <p className="text-gray-700 mb-2">${producto.precio}</p>
              <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">
                Agregar al carrito
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center col-span-full text-gray-500">
          No hay productos en esta categoría.
        </p>
      )}
    </div>
  );
}

export default ListaProductos;
