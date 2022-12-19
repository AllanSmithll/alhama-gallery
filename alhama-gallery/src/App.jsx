import './App.css';
import Galeria from './componentes/Galeria/Galeria.jsx';
import Cabecalho from './componentes/Cabecalho/Cabecalho';
import CaixaPesquisa from './componentes/CaixaPesquisa/CaixaPesquisa' 
import Rodape from './componentes/Rodape';
// import teste from './Logo.png'
function App() {
  return (
    <>
      <Cabecalho />
    <main>
      <CaixaPesquisa />
      <Galeria />
      <div>
        {/* <img src={teste} alt='logo'/> */}
      </div>
    </main>
      <footer id='footer' >
        <Rodape />
      </footer>
    </>
    
    
  );
}
export default App;
