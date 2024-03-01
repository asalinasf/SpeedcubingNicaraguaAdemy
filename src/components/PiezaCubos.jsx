import img from "../assets/aprende/piezas.png";
import styles from "./css/notacionCubo.module.css";

const PiezasCubo = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Piezas del cubo</h2>
      <div className={styles.containerSection}>
        <div className={styles.containerImg}>
          <img src={img} alt="capas" className={styles.img} />
        </div>
        <div className={styles.containerText}>
          <p className={styles.p}>
            En primer lugar, debemos conocer los diferentes tipos de piezas que
            forman los cubos de rubik. En el caso del 3x3, al igual que en todos
            los demás, está compuesto por tres tipos de piezas bien
            diferenciadas: centros, aristas y esquinas. Tenemos que tener claro
            que cada tipo de pieza solo puede estar en su posición. Es decir,
            por muchos movimientos que hagamos, nunca podremos poner una esquina
            en la posición de una arista.
          </p>
          <ul className={styles.ul}>
            <li className={styles.li}>
              Centros: los centros de un cubo de rubik son piezas que nunca se
              mueven, es decir, no varían su posición. Éstos están fijos en el
              centro de cada cara y marcan el color de la misma. Cada cubo tiene
              6 centros.
            </li>
            <li className={styles.li}>
              Aristas: el cubo 3x3 tiene 12 aristas. Se sitúan entre los
              vértices y están formadas por dos colores.
            </li>
            <li className={styles.li}>
              Esquinas: tendremos un total de 8 esquinas y cada una se compone
              de tres colores diferentes.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PiezasCubo;
