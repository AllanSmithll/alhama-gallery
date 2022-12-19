import './App.css';
import Galeria from './componentes/Galeria/Galeria';
import Cabecalho from './componentes/Cabecalho/Cabecalho';
import Rodape from './componentes/Rodape';


function App() {
  return (
    <>
      <Cabecalho />
    <main>
      <Galeria />
      <footer id='footer' >
        <Rodape />
      </footer>
    </main>
    </>
  );
}
export default App;
