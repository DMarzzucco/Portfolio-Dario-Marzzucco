import react from "react";
import { Link } from "react-router-dom";
import "./Comp.scss";
import { Tabs } from "./Tabs";
function About() {
    return (
        <>
            <section className="contAbout">
                <h1>¿Quien Soy?</h1>
                <div className="gd">
                    <Tabs />
                </div>
            </section>
            {/*  */}
            <section className="ubication">
                <h2>U B I C A C I Ó N</h2>
                {/*  */}
                <div className="uCont">
                    {/* grid */}
                    <div className="mp">
                        <Link to="https://www.google.com.ar/maps/place/Alvear+686,+Venado+Tuerto,+Santa+Fe/@-33.7477772,-61.966182,17z/data=!3m1!4b1!4m6!3m5!1s0x95c864b49ce66683:0x327b9aee519d8d9c!8m2!3d-33.7477772!4d-61.9636071!16s%2Fg%2F11c2hft9tn?entry=ttu">
                            <div className="Mpa" style={{
                                width: '200px',
                                height: '200px'
                            }}>
                            </div>
                        </Link>
                    </div>
                    {/*  */}
                    <div className="dt">
                        <li>
                            <i className="fa-solid fa-location-dot"></i>
                            Venado Tuerto, Santa Fe, Argentina.
                            <p>Alvear 686</p>
                            <p>Portero Nª3</p>
                        </li>
                        <li className="tl">
                            <i className="fa-solid fa-phone"></i>
                            Número de Teléfono: <br /> +54 9 3463 41-1187
                        </li>
                    </div>
                </div >
            </section >


        </>
    )

}

export default About
