const create = () => {
  return (
    <div className="create">
      <form>
        <label>Blog title: </label>
        <input type="text" required />
        <label>Blog body: </label>
        <textarea required></textarea>
        <label>Blog author:</label>
        <select>
          <option value="mario">Mario</option>
          <option value="yoshi">Yoshi</option>
        </select>
        <button>Add Blog</button>
      </form>
    </div>
  );
};

export default create;
