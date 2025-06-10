import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm border-b border-pink-200 px-6 py-3 flex items-center justify-between">
      {/* Logo ou título */}
      <Link
        to="/"
        className="text-pink-600 text-lg font-medium hover:text-pink-400 transition-colors duration-200"
      >
        Voltar
      </Link>

      {/* Botão hamburguer para mobile (se quiser manter) */}
      <div className="md:hidden">
        <button
          className="text-pink-600 focus:outline-none hover:text-pink-400 transition-colors duration-200"
          aria-label="Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
