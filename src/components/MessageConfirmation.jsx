import react from "react";
import { Link } from "react-router-dom";

export function MessageConfirmation() {
    return (
        <div style={{
            width: '300px',
            height: 'auto',
            backgroundColor: 'blue',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '10px',
            border: '1px solid grey',
            color: 'white',
            padding: '10px',
            marginTop: '-15px',
            position: 'absolute'
        }}>
            <h1
                style={{
                    margin: '0'
                }}
            >Mensaje Enviado</h1>
            <p
                style={{
                    margin: '0',
                    padding: '7px'
                }}
            >
                Gracias por contactarte,
                <br /> te respondere a brevedad.
            </p>

            <Link to="/"
                style={{
                    backgroundColor: 'white',
                    color: 'black',
                    padding: '7px',
                    borderRadius: '10px',
                    textDecoration: 'none',
                }}

            >Aceptar</Link>
        </div>
    )
}
