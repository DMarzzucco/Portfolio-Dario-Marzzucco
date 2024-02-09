import react from "react";
import { Link } from "react-router-dom";
import "./Comp.scss";
function Ubication() {
    return (
        <>
            {/* form */}
            < section className="contacto" >
                <div className="kopf">
                    <span>En el caso que quieras hacer una consulta</span>
                    <h2> Contactame</h2>
                </div>
                <div className="cont-for">
                    <div className="filas">
                        {/* <form action=""></form> */}
                        <input type="text" name="nombre" placeholder="Nombre & Apellido" />
                        <input type="text" name="telefono" placeholder=" Telefono" />
                        <input type="text" name="mail" placeholder="Correo Electronico (opcional)" />
                        <input type="text" name="contexto" placeholder="Contexto" />
                        <textarea name="mensaje" id="" cols="30" rows="10" placeholder="Mensaje" />
                    </div>

                </div>
            </section >
        </>
    )

}
export default Ubication;