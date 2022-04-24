import { AiOutlineSearch } from "react-icons/ai";
import styled from "styled-components";
import React from "react";
import { IoMdClose } from "react-icons/io";
const Search = () => {
  const [context, searchContext] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(context);
    searchContext("");
  };
  return (
    <Wrapper>
      <form action="" onSubmit={handleSubmit}>
        <AiOutlineSearch className="icon" />
        <input
          type="text"
          value={context}
          onChange={(e) => searchContext(e.target.value)}
          placeholder="Search..."
        />
        {context && (
          <IoMdClose onClick={() => searchContext("")} className="close-btn" />
        )}
      </form>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  border: 0.1px double var(--grey-clr);
  form {
    display: flex;
    padding: 0.5rem;
    justify-content: center;
    align-items: center;
    column-gap: 0.5rem;
    color: var(--grey-clr);
    input {
      border: none;
      font-size: 1rem;
      color: var(--grey-clr);
      width: 100px;
    }
    input:focus {
      outline: none;
    }
    input:placeholder {
      font-size: 1.3rem;
    }
    .close-btn {
      font-size: 1rem;
      cursor: pointer;
    }
  }
`;

export default Search;
