import react from "react";
import { Link } from "react-router-dom";
function Index() {
    return (

        <main className='container' style={{
            background: 'linear-gradient(#1b2024cc, #1b20241f),url(/img/index.jpeg)',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
        }}>
            {/* header */}
            <header className='cabezal'>
                <div className='logo'>
                    <a href=" "> <img src="/img/logo.png" alt="" style={{
                        width: '328px',
                        height: '70px'
                    }}></img>
                    </a>
                </div>
                <section className='text-h'>
                    <h2>Psicoterapia Individual</h2>
                    <p> No hay salud, sin salud mental.</p>
                </section>
                {/*  */}
                <section className="header-inicio">
                    <div className="wave">
                    </div>
                </section>
            </header>
            {/*  */}
            <div className="contenido">
                {/* nav */}
                <div className='gr'>
                    <div className="ph">
                    </div>
                    <div className="inf-gr">
                        <div className="cn">
                            <h1>Maricel Sovran</h1>
                            <span>Licenciada en Piscología</span>
                        </div>
                        <div className="nav-i">
                            <Link to='About' className="b-t"><i className="fa-solid fa-user"></i>
                                Acerca de mi</Link>
                            <a href="#">||</a>
                            <Link to='Ubication' className="b-t"><i className="fa-solid fa-location-dot"></i>
                                Ubicacion y Tuno</Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    )
}
export default Index;