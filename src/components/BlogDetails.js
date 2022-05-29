import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";

export default function BlogDetails() {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:8000/blogs/" + id);
  return (
    <div className="blog-details">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written By {blog.author}</p>
          <p>{blog.body}</p>
        </article>
      )}
    </div>
  );
}
