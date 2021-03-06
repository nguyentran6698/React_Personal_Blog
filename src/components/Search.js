import { AiOutlineSearch } from "react-icons/ai";
import styled from "styled-components";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useGlobalContext } from "../context";
import { useSearchParams, useNavigate } from "react-router-dom";
const Search = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { query, setQuery } = useGlobalContext();
  const [search, setSearch] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSearch("");
    navigate(`/blogs?title=${search}`);
  };
  return (
    <Wrapper>
      <form action="" onSubmit={handleSubmit}>
        <AiOutlineSearch className="icon" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
        />
        {search && (
          <IoMdClose onClick={() => setSearch("")} className="close-btn" />
        )}
      </form>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  border: 0.1px double var(--grey-clr);
  border-radius: var(--borderRadius);
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
