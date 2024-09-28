import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import '../styles/Header.css';

const Header = () => {
    return (
        <header className="header-container">
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <NavLink to="/" className="app-name">
                        <Navbar.Brand className="app-name">Alhama Gallery</Navbar.Brand>
                    </NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? 'nav-item active' : 'nav-item'
                                }
                                end
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/brazil"
                                className={({ isActive }) =>
                                    isActive ? 'nav-item active' : 'nav-item'
                                }
                            >
                                Brasil
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                    <NavLink to="/add-photo-form">
                        <Button className="btn-primary">
                            <FontAwesomeIcon className="icon-plus" icon={faPlus} />
                        </Button>
                    </NavLink>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;