import react, { useState } from "react";

export function Tabs() {
  const [activeTab, setActiveTab] = react.useState(0);
  const selecter = (index) => {
    setActiveTab(index);
  };
  return (
    <>
      <section className="Tabs">
        <div className="fotResp"></div>
        <div className="tabls">
          <div className="fot"></div>
          <button className={activeTab == 0 ? "active" : ""} onClick={() => selecter(0)}>Titulo Universitario</button>
          <button className={activeTab == 1 ? "active" : ""} onClick={() => selecter(1)}>Experiencia Laboral</button>
          <button className={activeTab == 2 ? "active" : ""} onClick={() => selecter(2)}>Servicios</button>
          <span className="indicador"></span>
        </div>
        <div className="tab-cont">
          {activeTab == 0 &&
            <div className="Titl">
              <h2>Títulos</h2>
              <div className="tlo">
                <h3>Licenciatura en Psicología</h3>
                <p>Universidad Nacional de Córdoba</p>
                <ul>
                  <li>Ubicación: Av. Haya de la Torre, Ciudad de Córdoba.</li>
                  <li>Teléfono: 0353 453-9103.</li>
                </ul>
              </div>
              <div className="tlo">
                <h3>Diplomado en Prevención en Violencia de Género</h3>
                <p>Universidad Nacional de Villa Maria</p>
                <ul>
                  <li>Ubicación: Arturo Jauretche 1555, X5900, Villa Maria, Córdoba.</li>
                  <li>Teléfono: 0353 453-9103.</li>
                </ul>
              </div>
            </div>
          }
          {activeTab == 1 &&
            <div className="Titl">
              <h2>Experiencias</h2>
              <div className="tlo2">
                <h3>Atención Publica en Psicoterapia Individual, Intervenciones comunitarias e
                  intersectoriales</h3>
                <p>Centro de Salud Dr Vidalle</p>
                <ul>
                  <li>Tiempo: 2014 - actualidad.</li>
                  <li>Ubicación: Murphy, Santa Fe.</li>
                  <li>Teléfono: <br /> +54 9 3462 44-1977</li>
                </ul>
              </div>
              <div className="tlo2">
                <h3>Coordinadora</h3>
                <p>Espacio de Primera Infancia "Norma Lilian Caffa"</p>
                <ul>
                  <li>Tiempo:2018 - 2020</li>
                  <li>Ubicación:Murphy- Santa fe</li>
                  <li>Teléfono: <br /> +54 9 3462 33-3814</li>
                </ul>
              </div>
              <div className="tlo2">
                <h3>Terapia Privada</h3>
                <p>Clínica Privada de Arias</p>
                <ul>
                  <li>Tiempo: 2006-2020</li>
                  <li>Ubicación: Aria- Córdoba</li>
                </ul>
              </div>
              <div className="tlo2">
                <h3>Acompañamientos Terapéuticos en Salud Mental <br />
                  Acompañamientos Terapéuticos para el Servicio Local de Niñez, Adolescencia y Familia
                </h3>
                <p>Centro Integrador Comunitario</p>
                <ul>
                  <li>Ubicación:Murphy- Santa Fe</li>
                  <li>Teléfono: <br /> +54 9 3462 41-2883</li>
                </ul>
              </div>
              <div className="tlo2"></div>
            </div>
          }
          {activeTab == 2 &&
            <div className="Titl">
              <h3>Servicios</h3>
              <p>Psicoterapia Individual</p>
              <ul>
                <li>Adolescentes</li>
                <li>Adultos</li>
              </ul>
              <h3>Formato</h3>
              <ul>
                <li>Remoto</li>
                <li>Presencial</li>
              </ul>
            </div>
          }
        </div>
      </section>
    </>
  );
}