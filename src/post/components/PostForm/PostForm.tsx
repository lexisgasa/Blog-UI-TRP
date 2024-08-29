import { useState } from "react";
import "./PostForm.css";
import { PostData } from "../../types";

const PostForm = (): React.ReactElement => {
  const [postData, setPostData] = useState<Omit<PostData, "date">>({
    author: "",
    title: "",
    content: "",
    imageUrl: "",
    alternativeText: "",
  });

  const handlePostData = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ): void => {
    setPostData((currentPostData) => ({
      ...currentPostData,
      [event.target.id]: event.target.value,
    }));
  };

  return (
    <>
      <form className="post-form">
        <div className="post-form__form-group">
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            placeholder="Insert your name"
            value={postData.author}
            onChange={handlePostData}
            required
          />
        </div>
        <div className="post-form__form-group">
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            placeholder="Insert post title"
            value={postData.title}
            onChange={handlePostData}
            required
          />
        </div>
        <div className="post-form__form-group">
          <label htmlFor="imageUrl">Image URL:</label>
          <input
            id="imageUrl"
            placeholder="Insert post image URL"
            value={postData.imageUrl}
            onChange={handlePostData}
            required
          />
        </div>
        <div className="post-form__form-group">
          <label htmlFor="alternativeText">Image alternative text:</label>
          <input
            id="alternativeText"
            placeholder="Insert post image alternative text"
            value={postData.alternativeText}
            onChange={handlePostData}
            required
          />
        </div>
        <div className="post-form__form-group">
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            placeholder="Insert post content"
            className="form-content__text"
            value={postData.content}
            onChange={handlePostData}
            required
          />
        </div>
        <button type="submit" className="post-form__button">
          Send
        </button>
      </form>
    </>
  );
};

export default PostForm;
