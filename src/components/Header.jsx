import react from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <>
            <header>
                <div className="logo">
                    <Link to="/">
                        <img src="/img/logo.png" />
                    </Link>
                    <div className="n-r">
                        <div className="nav-respon" onClick={toggleMenu}>
                            <i className="fa-solid fa-ellipsis-vertical" style={{
                                color: '#fff',
                            }}></i>
                        </div>
                        {menuOpen && (
                            <div className="menu-respon">
                                <ul className="nav-list">
                                    <Link to="/About">
                                        Acerca de mi
                                    </Link>
                                    <Link to="/Ubication">
                                        Turno
                                    </Link>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
                {/* nav */}
                <nav>
                    <ul className="nav-list">
                        <Link to="/About">
                            Acerca de mi
                        </Link>
                        <Link to="/Ubication">
                            Turno
                        </Link>
                    </ul>
                </nav>
                {/* respon */}

            </header>
        </>
    )
}

export default Header;


