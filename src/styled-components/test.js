import React, { useState } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { convertToHTML } from 'draft-convert';
import DOMPurify from 'dompurify';
import styled from "styled-components";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const EditMarkDown = ({setContentRender}) => {
    const generateUniqueId = () => {
        return Math.floor(Math.random() * Date.now())
        }
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [convertedContent,setconvertedContent] = useState(null);
    const handleEditorChange = (state)=>{
        setEditorState(state);
        convertContentToHTML();
    }
    const convertContentToHTML = ()=>{
        let currentContentAsHTML = DOMPurify.sanitize(convertToHTML(editorState.getCurrentContent()));
        setContentRender(currentContentAsHTML);
    }
    
  return (
    <Wrapper>
        <Editor
            editorState={editorState}
            onEditorStateChange={handleEditorChange}
            wrapperClassName="demo-wrapper"
            editorClassName="demo-editor"
      />
    
    </Wrapper>
  );
};
const Wrapper = styled.div`
`
export default EditMarkDown;
