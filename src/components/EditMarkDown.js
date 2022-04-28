import React, { useState } from "react";
import DOMPurify from "dompurify";
import styled from "styled-components";
import dateFormat from "dateformat";
import axios from "axios";
import FormData from "form-data";
import Editor from "ckeditor5-custom-build/build/ckeditor";
import { CKEditor } from "@ckeditor/ckeditor5-react";

const testURL = "http://localhost:5000/api/v1/image";
const proURL = "https://chau-blog-api-v1.herokuapp.com/api/v1/blogs/uploads";
const EditMarkDown = () => {
  const [post, setPost] = useState({
    id: "",
    title: "",
    public_date: "",
    image: "",
    description: "",
    content: "",
  });
  const [editorText, setEditorContext] = useState(null);
  const generateUniqueId = () => {
    return Math.floor(Math.random() * Date.now());
  };
  /*Upload Image Function*/
  const uploadImage = async (event) => {
    const name = event.target.name;
    const value = event.target.files[0];
    setPost({ ...post, [name]: value });
    const bodyFormData = new FormData();
    bodyFormData.append("image", post.image);

    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    try {
      const response = await axios.post(testURL, bodyFormData, config);
      console.log(response);
    } catch (err) {
      console.log(err.response);
    }
  };

  /*Code Seperation*/
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };
  const handleCkeditorState = (event, editor) => {
    setPost({ ...post, content: editorText.getData() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await setPost((post) => {
      return {
        ...post,
        id: generateUniqueId(),
        public_date: dateFormat(new Date(), "mmmm dd, yyyy"),
        content: DOMPurify.sanitize(post.content),
      };
    });
    editorText.setData("");
    await setPost({
      id: "",
      public_date: "",
      title: "",
      image: "",
      description: "",
      content: "",
    });
  };
  console.log(post);
  /*End of Code Seperation*/
  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h1>Post Your Blog Here</h1>
        <div className="form-control">
          <label htmlFor="title">title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter title"
            value={post.title}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="description">descritpion</label>
          <input
            type="text"
            value={post.description}
            name="description"
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="title">image</label>
          <input
            type="file"
            accept="image/*"
            value={post.image}
            name="image"
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="message">Content</label>
          <CKEditor
            editor={Editor}
            onReady={(editor) => {
              setEditorContext(editor);
            }}
            config={{
              ckfinder: {
                uploadUrl: testURL,
              },
            }}
            onChange={handleCkeditorState}
          />
        </div>
        <button type="submit">submit</button>
      </form>
    </Wrapper>
  );
};
const Wrapper = styled.div``;
export default EditMarkDown;

// /*SanitizeHTML*/
// const convertContentToHTML = () => {
//   let currentContentAsHTML = DOMPurify.sanitize(
//
//   );
// };

/*Handle Submit*/
// const handleEditorChange = (state) => {
//   setEditorState(state);
//   convertContentToHTML();
// };
