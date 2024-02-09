import { blog } from "../db/blog";
import ArticuloBlog from "./ArticuloBlog";
import styles from "./css/gridBlog.module.css";

const GridBlog = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Blog</h1>

      <div className={styles.boxContainer}>
        {blog.map((articulo) => (
          <ArticuloBlog
            key={articulo.id}
            titulo={articulo.titulo}
            contenido={articulo.contenido}
            imagen={articulo.imagen}
            fecha={articulo.fecha}
          />
        ))}
      </div>
    </div>
  );
};

export default GridBlog;
