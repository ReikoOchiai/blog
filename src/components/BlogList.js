import { Link } from "react-router-dom";

export default function BlogList({ blogs, title, handleDelete }) {
  return (
    <div className="blog-components">
      <h1>home</h1>
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h3>{blog.title}</h3>
            <p>Written by {blog.author}</p>
          </Link>
          <button onClick={() => handleDelete(blog.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
