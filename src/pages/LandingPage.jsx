import SectionLanding from "../components/SectionLanding";

import GridBlog from "../components/GridBlog";

import { blog } from "../db/blog";

const LandingPage = () => {
  const articulo1 = blog[0];
  const articulo2 = blog[1];
  const articulo3 = blog[2];
  const articulo4 = blog[3];
  const nuevoBlog = [articulo1, articulo2, articulo3, articulo4];
  console.log(nuevoBlog);
  return (
    <div>
      <SectionLanding />
      <GridBlog blog={nuevoBlog} />
    </div>
  );
};

export default LandingPage;
