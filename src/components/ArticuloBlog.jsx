import styles from "./css/articuloBlog.module.css";

const ArticuloBlog = ({ titulo, contenido, imagen, id }) => {
  return (
    <div className={styles.box}>
      <img src={imagen} alt={titulo} className={styles.img} />
      <h3 className={styles.h3}>{titulo}</h3>
      <p className={styles.texto}>{contenido}</p>
      <a href={`/blog/${id}`} className={styles.btn}>
        leer mas
      </a>
    </div>
  );
};

export default ArticuloBlog;
