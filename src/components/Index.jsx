import react from "react";
import { Link } from "react-router-dom";
function Index() {
    return (

        <>
            {/* header */}
            <header className='cabezal'>
                <div className='logo'>
                    <a href=" "> <img src="/img/logo.png" alt="" style={{
                        width: '305px',
                        height: '70px'
                    }}></img>
                    </a>
                </div>
                <section className="contenido">
                    {/* nav */}
                    <div className='text-h'>
                        <h2>Psicoterapia Individual</h2>
                        <p> No hay salud, sin salud mental.</p>
                    </div>
                    <div className='gr'>
                        <div className="ph">
                        </div>
                        <div className="inf-gr">
                            <div className="cn">
                                <h1>Maricel Sovran</h1>
                                <span>Licenciada en Piscología</span>
                            </div>
                            <div className="nav-i">
                                <Link to='About' className="b-t">
                                    <i className="fa-solid fa-user"></i>
                                    Acerca de mí
                                </Link>
                                <Link to='Ubication' className="b-t">
                                    <i className="fa-solid fa-phone"></i>
                                    Turno
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

            </header>
            {/*  */}

        </>

    )
}
export default Index;