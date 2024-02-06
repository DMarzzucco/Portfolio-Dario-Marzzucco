import react from "react";
import "./Footer.css";

function Footer () {
    return (
        <footer className="footer">

        {/* <!--grupo 1--> */}
        <div className="grupo1">
            <div className="box1">
                <figure> 
                    <a href="#"><img src="/img/footerç.jpg" alt=""/></a>
                </figure>
            </div>
            <div className="box">
                <h2>CONTACTO</h2>
                <div className="redes-s">
                    <p><i className="fa-solid fa-phone"></i>+54 9 3463 41-1187</p>
                    <p><i className="fa-regular fa-envelope"></i> maricelsovran@gmail.com</p>
                </div>
            </div>
        </div>

        {/* <!--grupo2--> */}
        <div className="grupo2">
            <div className="sour-box">
                <a href="#">source</a>
                <a href="#">systemarzz</a>
            </div>
        </div>

        {/* <!--grupo3--> */}
        <div className="grupo3">
            <small>&copy; 2023 <b>Psicoterapia Individual-SysteMarzz</b> - Todos los Derechos Reservados. </small>
        </div>
    </footer>

    )
}

export default Footer;