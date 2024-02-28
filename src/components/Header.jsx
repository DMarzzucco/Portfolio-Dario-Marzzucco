import react from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    const close = () => {setMenuOpem(false)};
    return (
        <>
            <header>
                <div className="grp">
                    <div className="logo">
                        <Link to="/">
                            <img src="/img/logo.png" />
                        </Link>
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
                    <div className="n-r">
                        <div className="nav-respon" onClick={toggleMenu}>
                            <i className="fa-solid fa-ellipsis-vertical" style={{
                                color: '#fff',
                            }}></i>
                        </div>

                    </div>
                </div>
                {/*  */}
                {menuOpen && (
                    <div className="menu-respon">
                        <ul className="nav-list">
                            <Link to="/About" onCLick={close}>
                                Acerca de mi
                            </Link>
                            <Link to="/Ubication" onCLick={close}>
                                Turno
                            </Link>
                        </ul>
                    </div>
                )}


            </header>
        </>
    )
}

export default Header;


