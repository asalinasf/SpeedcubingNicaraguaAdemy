import GridBlog from "../components/GridBlog";
import { blog } from "../db/blog";

const Blog = () => {
  return (
    <main>
      <GridBlog blog={blog} />
    </main>
  );
};

export default Blog;
