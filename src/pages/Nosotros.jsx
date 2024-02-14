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
            </div>
            <h2 className={styles.subtitle}>Aaron Salinas</h2>
            <p className={styles.p}>Programador de la página web</p>
          </div>
          <div className={styles.containerPersona}>
            <div className={styles.containerPersona}>
              <img src={img} alt="" width={250} className={styles.img} />
            </div>
            <h2 className={styles.subtitle}>Dionisio Pereira</h2>
            <p className={styles.p}>
              Encargado de Marketing Digital y Redes Sociales
            </p>
          </div>
          <div className={styles.containerPersona}>
            <div className={styles.containerImg}>
              <img src={img} alt="" width={250} className={styles.img} />
            </div>
            <h2 className={styles.subtitle}>Itihell Mejia</h2>
            <p className={styles.p}>
              Encargado de de redaccion de articulos del blog
            </p>
          </div>
          <div className={styles.containerPersona}>
            <div className={styles.containerImg}>
              <img src={img} alt="" width={250} className={styles.img} />
            </div>
            <h2 className={styles.subtitle}>Walter Campos</h2>
            <p className={styles.p}>Diseñador Grafico</p>
          </div>
          <div className={styles.containerPersona}>
            <div className={styles.img}>
              <img src={img} alt="" width={250} />
            </div>
            <h2 className={styles.subtitle}>Eliezer Salinas</h2>
            <p className={styles.p}>Diseñador Grafico</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Nosotros;
