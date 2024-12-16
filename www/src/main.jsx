import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import clsx from "clsx";

import commonStyles from "./common.module.scss";
import styles from "./styles.module.scss";
import logo from "./assets/5working_logo.png";
import coworking from "./assets/coworking.png";
import consulting from "./assets/consulting.jpg";
import formacion from "./assets/formacion.jpg";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className={commonStyles.MainContainer}>
      <div
        className={clsx(
          commonStyles.flex,
          commonStyles.gap10,
          commonStyles.justifyCentered,
          commonStyles.withMarginTop100
        )}
      >
        <img className={styles.logo} src={logo} alt="5working logo" />
        <div>
          <div className={styles.Title}>5working</div>
          <div className={styles.Subtitle}>
            Consultoría, formación y espacios de trabajo
          </div>
        </div>
      </div>
      <div
        className={clsx(
          commonStyles.flex,
          commonStyles.gap10,
          commonStyles.justifyCentered,
          commonStyles.withMarginTop100,
          commonStyles.wrap,
          commonStyles.alignStretch
        )}
      >
        <div className={commonStyles.Box}>
          <b>Consulting</b>
          <hr />
          <div>
            Asesoramos a empresas en software, datos e IA para impulsar su
            competitividad con soluciones innovadoras y eficientes.
          </div>
          <img className={styles.Image} src={consulting} alt="Consulting" />
        </div>
        <div className={commonStyles.Box}>
          <b>Formación</b>
          <hr />
          <div>
            Ofrecemos cursos y talleres prácticos en desarrollo web, analítica
            de datos e inteligencia artificial para potenciar tus habilidades
            tecnológicas.
          </div>
          <img className={styles.Image} src={formacion} alt="Formación" />
        </div>
        <div className={commonStyles.Box}>
          <b>Coworking</b>
          <hr />
          <div>
            Crea, colabora y crece en nuestros espacios de coworking
            inspiradores, con infraestructura avanzada, ambiente profesional y
            servicios flexibles.
          </div>
          <img className={styles.Image} src={coworking} alt="Coworking" />
        </div>
      </div>
    </div>
  </StrictMode>
);
