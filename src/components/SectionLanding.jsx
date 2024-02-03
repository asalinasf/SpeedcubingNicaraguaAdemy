import cuboGif from "../assets/cuboGif.gif";

import styles from "./css/sectionLanding.module.css";

const SectionLanding = () => {
  return (
    <section className={styles.section}>
      <div className={styles.containerText}>
        <h1 className={styles.title}>Speed</h1>
        <h1 className={styles.title}>Cubing</h1>
        <h1 className={styles.title}>Nicaragua</h1>
        <p className={styles.p}>
          Nosotros desarrollamos esta web para ayudar a potenciar el deporte en
          Nicaragua, es decir que el SpeedCubing sea una actividad muy
          practicada por los jovenes del pais, ya que ayuda a pontenciar el
          pensamiento critico y logico.
        </p>
      </div>
      <div className={styles.containerImg}>
        <img src={cuboGif} alt="cubo gif" className={styles.img} />
      </div>
    </section>
  );
};

export default SectionLanding;
