// src/App.jsx
 // Importando BrowserRouter
import Navbar from './components/Navbar';  // Importando a Navbar
import AppRoutes from './routes/AppRoutes';  // Importando as rotas da aplicação
import Detalhes from './pages/Detalhes';


function App() {
  return (
     {/* Envolvendo a aplicação com o BrowserRouter */}
      <Navbar />  {/* Navbar vai aparecer em todas as páginas */}
      <AppRoutes />  {/* As rotas da aplicação */}
    
  );
}

export default App;
