import react, { useRef } from 'react';
import emailjs from '@emailjs/browser';


export function Form() {

    const reForm = useRef();

    const sendEmail = (event) => {
        event.preventDefault();
        const serviceId = "service_xhmxkjl";
        const templeId = "template_7yi1umj";
        const key = "iT8BqbWUbZqyQKCa9";
        emailjs.sendForm(serviceId, templeId, reForm.current, key)
            .then(
                result => { return alert("Mensaje enviado") },
                error => { console.log(error.text) }
            )
    }
    return (
        <div className="cont-for">
            <form ref={reForm} onSubmit={sendEmail} className='forme'>
                <input type="text" name="name" placeholder="Nombre & Apellido" />
                <input type="text" name="phone" placeholder=" Teléfono" />
                <input type="text" name="mail" placeholder="Correo Electronico (opcional)" />
                <input type="text" name="context" placeholder="Contexto" />
                <textarea name="message" id="" cols="30" rows="10" placeholder="Mensaje" />
                <input type="submit" value="Enviar" className='btSend'/>
            </form>
        </div>
    )
}