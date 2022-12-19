import './App.css';
import Galeria from './componentes/Galeria/Galeria';
import Cabecalho from './componentes/Cabecalho/Cabecalho';
import Rodape from './componentes/Rodape';

// import teste from './Logo.png'




function App() {
  return (
    <>
      <Cabecalho />
    <main>
      <Galeria> </Galeria>
      
      <footer id='footer' >
        <Rodape />
      </footer>
    </main>
    </>
  );
}
export default App;
