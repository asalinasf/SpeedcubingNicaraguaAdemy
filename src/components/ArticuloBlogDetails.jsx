import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { blog } from "../db/blog";

const ArticuloBlogDetails = () => {
  const [articulo, setArticulo] = useState(blog);

  const params = useParams();
  const { id } = params;

  useEffect(() => {
    // Funcion encontrar noticia
    function encontrarArticulo() {
      const encontrarArticulo = blog.find(
        (newArticulo) => newArticulo.id === id
      );
      setArticulo(encontrarArticulo);
    }
    encontrarArticulo();
  }, [id]);

  console.log(articulo);
  return (
    <main>
      <h1>Blog Details</h1>
    </main>
  );
};

export default ArticuloBlogDetails;
