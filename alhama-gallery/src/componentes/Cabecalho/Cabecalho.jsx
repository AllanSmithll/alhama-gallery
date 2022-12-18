import './Cabecalho.css';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import teste from './Logo.png'
import CaixaPesquisa from '../CaixaPesquisa/CaixaPesquisa';
function Cabecalho(){
    return (
        <header className="position-relative">
        <nav className="navbar navbar-expand-lg" color="primary" dark expand="md">

            <div className="container-fluid">
                <div className="container position-absolute translate-middle" id="Logo">
                <img id='logo' src={teste} alt='logo' style={{width: '100px', height: '100px'}}/>
                    <h1 className="navbar-brand fs-5" id='TitleHeader'>ALHAMA</h1>
                </div>
                <div>
                    <CaixaPesquisa />
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse Navegacao" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 ">

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <FontAwesomeIcon icon={faUser} />
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#"> Fazer Login </a></li>
                                <li><a className="dropdown-item" href="#">Cadastrar-se</a></li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#Logo">Home</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">Nova Imagem</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Equipe"> Desenvolvedores</a>
                        </li>
                        <li className="nav-item" />
                    </ul>
                </div>
            </div>
        </nav>
    </header>

    )
}

export default Cabecalho;