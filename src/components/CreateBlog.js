export default function CreateBlog() {
  return (
    <div>
      <form>
        <label>
          Blog Title:
          <input type="text" name="title" />
        </label>
        <label>
          Blog contents:
          <textarea cols="30" rows="10" type="text" name="blog" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
