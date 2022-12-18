import './App.css';
import Galeria from './componentes/Galeria.jsx';
import Cabecalho from './componentes/Cabecalho/Cabecalho';
import CaixaPesquisa from './componentes/CaixaPesquisa/CaixaPesquisa' 

function App() {
  return (
    <>
      <Cabecalho />
    <main>
      <CaixaPesquisa />
      <Galeria />
    </main>
    </>
    
    
  );
}
export default App;
