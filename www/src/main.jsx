import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import styles from "./common.module.scss";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className={styles.MainContainer}>
      Hola
    </div>
  </StrictMode>
);
