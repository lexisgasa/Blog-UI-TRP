import "./PostForm.css";

const PostForm = (): React.ReactElement => {
  return (
    <form action="POST" className="post-form">
      <div className="form-author">
        <label htmlFor="form-author">Author:</label>
        <input
          type="text"
          id="form-author"
          placeholder="Insert your name"
          required
        />
      </div>
      <div className="form-title">
        <label htmlFor="form-title">Title:</label>
        <input id="form-title" placeholder="Insert post title" required />
      </div>
      <div className="form-imageUrl">
        <label htmlFor="form-imageUrl">Image URL:</label>
        <input
          id="form-imageUrl"
          placeholder="Insert post image URL"
          required
        />
      </div>
      <div className="form-imageAlternativeText">
        <label htmlFor="form-imageAlternativeText">
          Image alternative text:{" "}
        </label>
        <input
          id="form-imageAlternativeText"
          placeholder="Insert post image alternative text"
          required
        />
      </div>
      <div className="form-content">
        <label htmlFor="form-content">Content:</label>
        <textarea
          id="form-content"
          placeholder="Insert post content"
          className="form-content__text"
          required
        />
      </div>
      <button type="submit" className="post-form__button">
        Send
      </button>
    </form>
  );
};

export default PostForm;
