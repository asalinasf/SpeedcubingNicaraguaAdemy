import { blog } from "../db/blog";
import ArticuloBlog from "./ArticuloBlog";

const GridBlog = () => {
  console.log(blog);
  return (
    <div>
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
  );
};

export default GridBlog;
