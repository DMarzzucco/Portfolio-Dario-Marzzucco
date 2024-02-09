import react from "react";
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
        </>
    )

}

export default About
