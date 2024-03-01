import img from "../assets/aprende/tutorial1.png";
import styles from "./css/notacionCubo.module.css";
import img2 from "../assets/aprende/tutorial2.webp";
import img3 from "../assets/aprende/tutorial3.webp";
import img4 from "../assets/aprende/tutorial4.webp";
import img5 from "../assets/aprende/tutorial5.webp";
import img6 from "../assets/aprende/tutorial6.webp";
import img7 from "../assets/aprende/tutorial7.webp";
import img8 from "../assets/aprende/tutorial8.webp";
import img9 from "../assets/aprende/tutorial9.webp";

const Tutorial = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Como hacer la cruz</h2>
      <div className={styles.containerSection}>
        <div className={styles.containerImg}>
          <img src={img} alt="capas" className={styles.img} />
        </div>
        <div className={styles.containerText}>
          <p className={styles.p}>
            En esta primera capa vamos a comenzar por la cara blanca (aunque,
            como ya se ha mencionado,se puede comenzar por cualquier cara). Lo
            primero que tenemos que hacer es una cruz blanca, teniendo en cuenta
            que tendremos que respetar el color de los centros adyacentes. Este
            paso no requiere ningún algoritmo específico, es algo intuitivo que
            solo necesita un poco de práctica para entender cómo se mueven las
            diferentes piezas por el cubo. En la siguiente ilustración se
            refleja lo que tenemos que conseguir.
          </p>
          <div className={styles.btn}>
            <p className={styles.p2}>Posicion correcta de la cruz</p>
          </div>
          <p className={styles.p}>
            Aunque es algo sencillo te dejamos algunos casos prácticos para que
            veas los movimientos que tienes que hacer.
          </p>
        </div>
        <div className={styles.containerImages}>
          <div className={styles.containerImg2}>
            <img src={img2} className={styles.img} alt="img2" />
            <p className={styles.pbtn}>U’ R’ U F’</p>
          </div>
          <div className={styles.containerImg2}>
            <img src={img3} className={styles.img} alt="img3" />
            <p className={styles.pbtn}>F’ U’ R U</p>
          </div>
          <div className={styles.containerImg2}>
            <img className={styles.img} src={img4} alt="img4" />
            <p className={styles.pbtn}>U’ R U</p>
          </div>
        </div>
        <div className={styles.section2}>
          <h2>Resolver las esquinas blancas</h2>
          <p>
            Una vez tengamos la cruz blanca tendremos que insertar las esquinas
            que tienen el color blanco en su lugar correcto para terminar la
            primera capa. Es decir, en este paso únicamente prestaremos atención
            a aquellas esquinas que tengan una de sus caras de color blanco.
            Este paso también es muy sencillo.Solo tenemos cinco posibles
            situaciones y podremos solucionarlas con el mismo algoritmo.
          </p>
          <p>
            Con la cruz blanca hacia arriba, buscamos alguna esquina con color
            blanco, pudiendo obtener alguno de los siguientes casos:
          </p>
          <ul className={styles.ul}>
            <li className={styles.li}>
              Primer caso. En la capa inferior tenemos una esquina en la que el
              color blanco se queda mirando hacia nosotros. Para ponerla en su
              posición correcta, lo primero que tenemos que hacer es colocar la
              esquina justo debajo del lugar donde la queremos insertar y hacer
              los cuatro sencillos pasos que podemos ver en la primera
              ilustración.
            </li>
            <li className={styles.li}>
              Segundo caso. En esta ocasión el color blanco se queda mirando
              hacia abajo. Igual que en caso anterior, ponemos la esquina justo
              debajo de donde la queremos insertar y realizamos el mismo
              algoritmo que antes pero, en esta ocasión, lo tenemos que repetir
              tres veces para que la esquina se coloque en su posición correcta.
            </li>
            <li className={styles.li}>
              Tercer caso. En esta situación la esquina está en su posición
              correcta, pero mal orientada. Para cambiar esto tenemos que
              aplicar el mismo algoritmo que en los casos anteriores, pero en
              esta ocasión lo repetiremos cuatro veces, para que la esquina
              quede bien colocada.
            </li>
            <li className={styles.li}>
              Cuarto caso. Nos encontramos casi lo mismo que en el tercer caso;
              la diferencia es que el color blanco no está de frente a nosotros,
              sino que se queda a la derecha. Para arreglar esta pieza
              llevaremos a cabo el mismo algoritmo, pero lo repetiremos solo dos
              veces.
            </li>
            <li className={styles.li}>
              Quinto caso. Se corresponde con algo muy parecido al caso uno,
              pero en esta ocasión el blanco, en vez de mirarnos a nosotros, se
              queda mirando hacia la derecha. En esta situación haremos un
              algoritmo aún más sencillo. También lo podemos resolver con el
              mismo algoritmo que en los otros casos pero tendríamos que
              aplicarlo cinco veces.
            </li>
          </ul>
          <div className={styles.containerImages}>
            <div className={styles.containerImg2}>
              <img src={img5} className={styles.img} alt="img2" />
              <p className={styles.pbtn}>D’ R’ D R</p>
            </div>
            <div className={styles.containerImg2}>
              <img src={img6} className={styles.img} alt="img3" />
              <p className={styles.pbtn}>D’ R’ D R (x3)</p>
            </div>
            <div className={styles.containerImg2}>
              <img className={styles.img} src={img7} alt="img4" />
              <p className={styles.pbtn}>D’ R’ D R(x4)</p>
            </div>
            <div className={styles.containerImg2}>
              <img className={styles.img} src={img8} alt="img4" />
              <p className={styles.pbtn}>D’ R’ D R(x2)</p>
            </div>
            <div className={styles.containerImg2}>
              <img className={styles.img} src={img9} alt="img4" />
              <p className={styles.pbtn}>R’ D’ R</p>
            </div>
          </div>
          <p className={styles.p}>
            Puede que te encuentres el tercer caso pero que la esquina no tenga
            que ir ahí, en esa situación tendremos que aplicar una vez el
            algoritmo para bajar esa pieza a la capa inferior y cuando la
            tengamos abajo podremos hacerlo con normalidad.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
