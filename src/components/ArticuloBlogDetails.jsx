import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { blog } from "../db/blog.js";
import styles from "./css/articuloBlogDeatils.module.css";

const ArticuloBlogDetails = () => {
  const [articulo, setArticulo] = useState({});

  const params = useParams();
  const { id } = params;

  useEffect(() => {
    function encontrarArticulo() {
      const nuevoBlog = [...blog];
      const ArticuloEncontrado = nuevoBlog.find(
        (article) => article.id === Number(id)
      );
      setArticulo(ArticuloEncontrado);
    }
    encontrarArticulo();
  }, [id]);

  return (
    <main className={styles.main}>
      <h1 className={styles.h1z}>{articulo.titulo}</h1>
      <div className={styles.container}>
        <img
          src={articulo.imagen}
          alt="imagen articulo"
          className={styles.img}
        />
        <p className={styles.p}>{articulo.contenido}</p>
      </div>
    </main>
  );
};

export default ArticuloBlogDetails;
