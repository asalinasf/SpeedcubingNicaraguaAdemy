import { blog } from "../db/blog";
import ArticuloBlog from "./ArticuloBlog";
import styles from "./css/gridBlog.module.css";
import { useState } from "react";

const GridBlog = () => {
  const [articulos, useArticulos] = useState([...blog]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Blog</h1>

      <div className={styles.boxContainer}>
        {articulos.map((articulo) => (
          <ArticuloBlog
            key={articulo.id}
            titulo={articulo.titulo}
            contenido={articulo.contenido}
            imagen={articulo.imagen}
            fecha={articulo.fecha}
            id={articulo.id}
          />
        ))}
      </div>
    </div>
  );
};

export default GridBlog;
