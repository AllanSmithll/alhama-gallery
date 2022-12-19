import './CaixaPesquisa.css';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function caixaPesquisa(){
    return(
    <div>      
        <form id="pesquisaForm" onsubmit="handleEvent(event)">
    
            <div className='container' id="Pesquisar">
            
            <button type="submit" id='Enviar' onclick="search_books()" >                                 <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
                        
            <input id='BuscaInput' type="text" autocomplete="off" size="50%" placeholder="Brasil/Rio de Janeiro/Cristo Redentor" />

            </div>

        </form> 
    </div>
    )

}
export default caixaPesquisa;