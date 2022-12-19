import './CaixaPesquisa.css';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function handleSubmit(event){
    event.preventDefault()
}

function CaixaPesquisa(){
    return(
 
        <form id="pesquisaForm" onSubmit={(event)=> handleSubmit(event)} dark="true">
            <div className='divBusca' id="Pesquisar">
            <input type="text" id="txtBusca" placeholder="País/Monumentos/Cidades" />
            <button type='submit' id='Busca'>
            <FontAwesomeIcon icon={faMagnifyingGlass}/>
            </button>
            </div>

        </form> 
    )

}
export default CaixaPesquisa;