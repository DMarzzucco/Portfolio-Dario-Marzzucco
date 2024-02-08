import react from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Header() {
    return (
        <>
            <header>
                <div className="logo">
                    <Link to="/">
                        <img src="/img/logo.png" style={{
                            width: '328px',
                            height: '70px',
                            marginLeft: '20px'
                        }} />
                    </Link>
                </div>
                {/* nav */}
                <nav>
                    <ul className="nav-list">
                        <Link to="/About">Acerca de Mi</Link>
                        <a href="">||</a>
                        <Link to="/Ubication">Ubicacion y Turnos</Link>
                    </ul>
                </nav>
                {/* respon */}
                <div className="nav-respon">
                    <i className="fa-solid fa-ellipsis-vertical" style={{
                        color: '#fff',
                    }}></i>
                </div>
            </header>
        </>
    )
}

export default Header;


