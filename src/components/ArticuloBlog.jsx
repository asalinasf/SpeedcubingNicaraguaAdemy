const ArticuloBlog = ({ titulo, contenido, imagen, fecha }) => {
  return (
    <div>
      <h1>{titulo}</h1>
      <img src={imagen} alt={titulo} />
    </div>
  );
};

export default ArticuloBlog;
