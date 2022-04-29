import React, { useState, useRef } from "react";
import DOMPurify from "dompurify";
import styled from "styled-components";
import dateFormat from "dateformat";
import axios from "axios";
import FormData from "form-data";
import Editor from "ckeditor5-custom-build/build/ckeditor";
import { CKEditor } from "@ckeditor/ckeditor5-react";
// MUI Component
import { TextField, Button, Input } from "@mui/material";
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
  const hiddenInput = useRef(null);
  const generateUniqueId = () => {
    return Math.floor(Math.random() * Date.now());
  };
  /*Upload Image Function*/
  const uploadImage = async (event) => {
    console.log(event.target.files[0]);
    const name = event.target.name;
    const value = event.target.files[0];

    const bodyFormData = new FormData();

    bodyFormData.append("upload", value);

    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    try {
      const response = await axios.post(testURL, bodyFormData, config);
      const { url } = response.data;
      await setPost({ ...post, [name]: url });
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
    try {
      const response = await axios.post("http://localhost:3000/posts", post);
      console.log(response);
      editorText.setData("");
      await setPost({
        id: "",
        public_date: "",
        title: "",
        image: "",
        description: "",
        content: "",
      });
    } catch (err) {
      console.log(err.response);
    }
  };
  console.log(post);
  /*End of Code Seperation*/
  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h1>Post Your Blog Here</h1>
        <TextField
          id="outlined-basic"
          label="Title"
          variant="outlined"
          type="text"
          name="title"
          placeholder="Enter title"
          value={post.title}
          onChange={handleChange}
        />

        <TextField
          type="text"
          value={post.description}
          id="outlined-basic"
          label="Description"
          variant="outlined"
          name="description"
          onChange={handleChange}
        />

        <div className="form-control">
          <p
            style={{
              display: "inline-block",
              color: "var(--grey-clr)",
              fontSize: "0.975rem",
              marginRight: "0.3rem",
            }}
          >
            Thumbnail Upload:
          </p>
          <Button
            onClick={(e) => {
              hiddenInput.current.click();
            }}
          >
            {!post.image ? "Upload" : "Change"}
          </Button>
          <input
            ref={hiddenInput}
            className="inputFile"
            type="file"
            accept="image/*"
            name="image"
            style={{ display: "none" }}
            onChange={uploadImage}
          />
          {post.image && (
            <div className="previewContainer">
              <img src={post.image} className="img" alt="" />
            </div>
          )}
        </div>
        <div className="form-control">
          <CKEditor
            className="target"
            editor={Editor}
            onReady={(editor) => {
              setEditorContext(editor);
            }}
            onDestroy={(editor) => {}}
            config={{
              placeholder: "Type your post here...",
              ckfinder: {
                uploadUrl: testURL,
              },
            }}
            onChange={handleCkeditorState}
          />
        </div>
        <Button variant="contained" type="submit">
          Post
        </Button>
      </form>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  max-width: 1250px;
  margin: 0 auto;
  .form {
    width: 100%;
    padding: 2rem 1.5rem;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    .form-control {
      min-width: 100%;
      .ck-editor__editable_inline {
        min-height: 200px;
        max-height: 600px;
      }
    }
    .previewContainer {
      width: 350px;
      border: 2px solid var(--black-clr);
    }
  }
`;
export default EditMarkDown;
