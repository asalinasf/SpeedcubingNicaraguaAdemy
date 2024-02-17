import styles from "./css/cuboRubik.module.css";

const CuboRubik = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Que es el cubo Rubik</h2>
      <p className={styles.p}>
        El cubo de rubik es un rompecabezas mecánico tradicional que consiste en
        un cubo de seis caras, cada una de sus seis caras está cubierta por
        nueve pegatinas que son trozo de papel plástico de seis colores que son
        el blanco, rojo, azul, naranja, verde y amarillo, estos colores pueden
        variar porque cada una de sus piezas centrales muestran una cara de un
        solo color, doce piezas aristas, que es el segmento de recta donde se
        encuentran dos caras coloreadas y ocho piezas verticales que es el punto
        donde se encuentra tres caras coloreadas, Además existe una versión
        especial para daltónicos que es un defecto que consiste en no distinguir
        los colores de las cuatro caras.
      </p>
    </div>
  );
};

export default CuboRubik;
