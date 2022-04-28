import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import EditMarkDown from "../components/EditMarkDown";
import dateFormat from "dateformat";
import FormData from "form-data";
const BlogEdit = () => {
  const generateUniqueId = () => {
    return Math.floor(Math.random() * Date.now());
  };
  const [content, setContent] = useState({ title: "", image: "" });
  const [contentRender, setContentRender] = useState();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setContent({ ...content, [name]: value });
  };
  /*Handle Image Upload*/
  const handleFile = async (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.files[0];

    setContent({ ...content, [name]: value });
  };
  const handleUpload = async (e) => {
    await uploadImage();
  };
  const uploadImage = async (file) => {
    const bodyFormData = new FormData();
    bodyFormData.append("image", content.image);
    const URL = "https://chau-blog-api-v1.herokuapp.com/api/v1/blogs/uploads";
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    try {
      const response = await axios.post(URL, bodyFormData, config);
      console.log(response);
    } catch (err) {
      console.log(err.response);
    }
  };
  /*End of Handle Image Upload*/
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {
      ...content,
      post_content: contentRender,
    };
    console.log(blog);
  };
  return (
    <Wrapper>
      <EditMarkDown />
    </Wrapper>
  );
};
const Wrapper = styled.section`
  max-width: 1400px;
  .text-editor-container {
    padding: 2rem 1.5rem;
    .form {
      max-width: 500px;
      margin: 0 auto;
      .form-control {
        input {
          display: block;
          width: 80%;
          font-size: 1.2rem;
        }
        width: 100%;
      }
    }
  }
`;
export default BlogEdit;
