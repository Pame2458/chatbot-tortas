// Footer.jsx
import { FaInstagram, FaFacebookF, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-pink-200 text-pink-900 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
        {/* Contacto */}
        <div>
          <h4 className="text-lg font-bold mb-2">Contacto</h4>
          <p>Email: contacto@decotortasyamila.com</p>
          <p>WhatsApp: +54 9 351 123 4567</p>
        </div>

        {/* Enlaces útiles */}
        <div>
          <h4 className="text-lg font-bold mb-2">Enlaces útiles</h4>
          <ul>
            <li><a href="#inicio" className="hover:underline">Inicio</a></li>
            <li><a href="#productos" className="hover:underline">Productos</a></li>
            <li><a href="#contacto" className="hover:underline">Contacto</a></li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div>
          <h4 className="text-lg font-bold mb-2">Seguinos</h4>
          <div className="flex justify-center sm:justify-start gap-4 text-2xl">
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram className="hover:text-pink-600" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF className="hover:text-pink-600" />
            </a>
            <a href="mailto:contacto@decotortasyamila.com">
              <FaEnvelope className="hover:text-pink-600" />
            </a>
          </div>
        </div>
      </div>

      {/* Derechos reservados */}
      <div className="text-center text-sm text-pink-800 mt-6">
        © {new Date().getFullYear()} Decotortas Yamila. Todos los derechos reservados.
      </div>
    </footer>
  );
}

export default Footer;
