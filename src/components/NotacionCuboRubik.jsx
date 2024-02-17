import img from "../assets/aprende/notacion.png";
import styles from "./css/notacionCubo.module.css";

const NotacionCuboRubik = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Notación para el cubo de rubik</h2>
      <div className={styles.containerSection}>
        <div className={styles.containerImg}>
          <img src={img} alt="cubo notacion" className={styles.img} />
        </div>
        <div className={styles.containerText}>
          <p className={styles.p}>
            Cuando te encuentres la letra normal (U) quiere decir que el giro se
            deberá hacer en sentido de las agujas del reloj y cuando la letra
            lleve un apóstrofe (U’) el giro será antihorario. Podemos
            encontrarnos con las siguientes:
          </p>
          <ul className={styles.ul}>
            <li className={styles.li}>U (Up): Capa Superior</li>
            <li className={styles.li}>D (Down): Capa Inferior</li>
            <li className={styles.li}>R (Right): Capa Derecha</li>
            <li className={styles.li}>L (Left): Capa Izquierda</li>
            <li className={styles.li}>F (Front): Capa Frontal</li>
            <li className={styles.li}>B (Back): Capa Trasera</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NotacionCuboRubik;
