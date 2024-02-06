import uuid from "react-uuid";

// Imagenes
import img1 from "../assets/blog/blog1.jpeg";

export const blog = [
  {
    titulo: "CAS_ESTELI organiza un torneo de SpeedCubing en Estelí",
    contenido:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    imagen: img1,
    fecha: "25 de Febrero 2024",
    id: uuid(),
  },
  {
    titulo: "",
    contenido: "",
    imagen: "",
    fecha: "",
    id: uuid(),
  },
];
