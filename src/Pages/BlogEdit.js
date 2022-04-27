import React, { useState } from "react";
import styled from "styled-components";
import EditMarkDown from "../components/EditMarkDown";
import dateFormat from "dateformat";
const BlogEdit = () => {
    const generateUniqueId = () => {
        return Math.floor(Math.random() * Date.now())
    }
    const [content, setContent] = useState({ title: "", pic: "" , });
    const [contentRender,setContentRender] = useState();  
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setContent({ ...content, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const now = dateFormat(new Date(), "mmmm dd, yyyy");
    const id = generateUniqueId();
    const blog = {...content,id,public_date:now, post_content:contentRender}
    console.log(blog);
    
    
  };
  return (
    <Wrapper>
      <div className="text-editor-container">
        <form action="" className="form" onSubmit={handleSubmit}>
          <h2>Write Something Today</h2>
          <div className="form-control">
            <label htmlFor="">Title: </label>
            <input
              name="title"
              type="text"
              value={content.title}
              id="title"
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="">Image: </label>
            <input
              type="file"
              accept="image/*,.pdf"
              value={content.pic}
              onChange={handleChange}
              name="pic"
            ></input>
          </div>
          <EditMarkDown setContentRender={setContentRender}/>
          <button type="submit">Click Me</button>
        </form>
        
      </div>
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
