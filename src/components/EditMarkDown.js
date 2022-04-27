import React, { useState } from 'react';
import { EditorState } from 'draft-js';

import { Editor } from 'react-draft-wysiwyg';
import { convertToHTML } from 'draft-convert';
import DOMPurify from 'dompurify';
import styled from "styled-components";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const EditMarkDown = ({setContentRender}) => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
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
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
      />
    
    </Wrapper>
  );
};
const Wrapper = styled.div`
`
export default EditMarkDown;
