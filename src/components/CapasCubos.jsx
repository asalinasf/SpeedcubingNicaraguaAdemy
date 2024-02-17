import img from "../assets/aprende/capas.png";
import styles from "./css/notacionCubo.module.css";

const CapasCubos = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Capas Cubos</h2>
      <div className={styles.containerSection}>
        <div className={styles.containerImg}>
          <img src={img} alt="capas" className={styles.img} />
        </div>
        <div className={styles.containerText}>
          <p className={styles.p}>
            Como hemos comentado al principio de este tutorial, en el método
            para resolver un cubo de rubik 3x3 para principiantes, haremos una
            resolución por capas. Estos cubos se componen de tres capas:
            superior, central e inferior. Vamos a conocer brevemente lo que
            tenemos que hacer en cada una de ellas.
          </p>
          <ul className={styles.ul}>
            <li className={styles.li}>
              En la capa superior (que normalmente comenzamos por la cara
              blanca, aunque se puede comenzar por cualquier otra) tenemos que
              hacer primero la cruz y después meter las esquinas en su posición
              correcta.
            </li>
            <li className={styles.li}>
              En la capa central tendremos que buscar las aristas que van en
              esta capa y mediante un sencillo algoritmo, colocarlas en su
              posición correcta.
            </li>
            <li className={styles.li}>
              En la última capa del cubo de rubik tendremos que repetir el
              proceso que hemos hecho en la primera capa, pero ejecutando una
              serie de algoritmos para no desmontar la parte que ya tenemos
              hecha.
            </li>
          </ul>
          <p className={styles.p}>
            Una vez hemos conocido de forma breve lo que debemos hacer para
            resolver el cubo de rubik 3x3, vamos a ver detalladamente los pasos
            que haremos en cada una de las capas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CapasCubos;
