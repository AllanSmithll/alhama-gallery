import './App.css';
import Galeria from './componentes/Galeria.jsx';
import Cabecalho from './componentes/Cabecalho/Cabecalho';
import CaixaPesquisa from './componentes/CaixaPesquisa/CaixaPesquisa' 
import Rodape from './componentes/Rodape';

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
