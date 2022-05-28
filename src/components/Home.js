import BlogList from "./BlogList";
import useFetch from "./useFetch";
// import CreateBlog from "./CreateBlog";

export default function Home() {
  const { data, isPending, error } = useFetch("http://localhost:8000/blogs");

  // const handleDelete = (id) => {
  //   const newBlog = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newBlog);
  // };

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {data && <BlogList blogs={data} title="All blogs" />}
      {/* <CreateBlog /> */}
    </div>
  );
}
