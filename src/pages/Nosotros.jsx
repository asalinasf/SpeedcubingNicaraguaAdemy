import {
  FaReact,
  FaCss3Alt,
  FaTiktok,
  FaInstagramSquare,
  FaFacebook,
} from "react-icons/fa";
import { FaBook, FaBookOpenReader, FaPencil } from "react-icons/fa6";
import { SiAdobephotoshop } from "react-icons/si";
import { FaEdit, FaPager } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import img from "../assets/logo.png";

import styles from "./css/nosotros.module.css";

const Nosotros = () => {
  return (
    <div className={styles.big}>
      <h1 className={styles.titulo}>Nosotros</h1>
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.containerPersona}>
            <div className={styles.containerImg}>
              <img src={img} alt="" width={250} className={styles.img} />
              <h2 className={styles.subtitle}>Aaron Salinas</h2>
            </div>
            <div className={styles.containerText}>
              <p className={styles.p}>Programador de la página web</p>
              <div className={styles.containerIcons}>
                <FaReact className={styles.react} />
                <FaCss3Alt className={styles.css} />
                <IoLogoJavascript className={styles.javascript} />
              </div>
            </div>
          </div>
          <div className={styles.containerPersona}>
            <div className={styles.containerImg}>
              <img src={img} alt="" width={250} className={styles.img} />
              <h2 className={styles.subtitle}>Dionisio Pereira</h2>
            </div>
            <div className={styles.containerText}>
              <p className={styles.p}>
                Encargado de Marketing Digital y Redes Sociales
              </p>
              <div className={styles.containerIcons}>
                <FaTiktok className={styles.tikTok} />
                <FaInstagramSquare className={styles.ig} />
                <FaFacebook className={styles.face} />
              </div>
            </div>
          </div>
          <div className={styles.containerPersona}>
            <div className={styles.containerImg}>
              <img src={img} alt="" width={250} className={styles.img} />
              <h2 className={styles.subtitle}>Itihell Mejia</h2>
            </div>
            <div className={styles.containerText}>
              <p className={styles.p}>
                Encargado de Redacción de Artículos para el Blog
              </p>
              <div className={styles.containerIcons}>
                <FaBook className={styles.book1} />
                <FaPencil className={styles.book} />
                <FaBookOpenReader className={styles.book} />
              </div>
            </div>
          </div>
          <div className={styles.containerPersona}>
            <div className={styles.containerImg}>
              <img src={img} alt="" width={250} className={styles.img} />
              <h2 className={styles.subtitle}>Walter Campos</h2>
            </div>
            <div className={styles.containerText}>
              <p className={styles.p}>Diseñador grafico y marketing digital</p>
              <div className={styles.containerIcons}>
                <SiAdobephotoshop className={styles.ph} />
                <FaEdit className={styles.edit} />
                <FaPager className={styles.page} />
              </div>
            </div>
          </div>
          <div className={styles.containerPersona}>
            <div className={styles.containerImg}>
              <img src={img} alt="" width={250} className={styles.img} />
              <h2 className={styles.subtitle}>Eliezer Urbina </h2>
            </div>
            <div className={styles.containerText}>
              <p className={styles.p}>Diseñador grafico y marketing digital</p>
              <div className={styles.containerIcons}>
                <SiAdobephotoshop className={styles.ph} />
                <FaEdit className={styles.edit} />
                <FaPager className={styles.page} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Nosotros;
