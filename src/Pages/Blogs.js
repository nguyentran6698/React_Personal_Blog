import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context";
import Loading from "../components/Loading";
import BasicPost from "../components/PostTemplate/BasicPost";
import { devices } from "../styled-components/size";
import Header from "../components/PostHeaderSlide/BlogPostHeader";
import { useSearchParams, Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
// Testing Purspose
const mapValueJsonServer = {
  categories: "_like",
  order: "_order",
  sort: "_sort",
  title: "_like",
};
const Blogs = () => {
  window.scrollTo(0, 0);
  const { loading, blogs, setQuery } = useGlobalContext();
  const [currentParams, setCurrentParams] = useState({});
  const [searchParams] = useSearchParams();
  // PagePaginate
  const itemsPerPage = 10;
  const [currentItems, setCurrentItems] = useState(blogs);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  useEffect(() => {
    if (blogs.length !== 0) {
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(blogs.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(blogs.length / itemsPerPage));
    }
  }, [itemOffset, itemsPerPage, blogs]);
  const handlePageClick = (e) => {
    const newOffSet = (e.selected * itemsPerPage) % blogs.length;
    console.log(
      `User requested page number ${e.selected}, which is offset ${newOffSet}`
    );
    setItemOffset(newOffSet);
  };
  // HandleFetching
  useEffect(() => {
    if (currentParams.categories !== "all") {
      let queryParse = Object.keys(currentParams).map((key) => {
        return `${key}${mapValueJsonServer[key]}=${currentParams[key]}`;
      });
      let query = queryParse.join("&");

      setQuery(`http://localhost:3000/posts?${query}`);
    } else {
      setQuery(`http://localhost:3000/posts`);
    }
  }, [currentParams]);
  // handle params
  useEffect(() => {
    setCurrentParams({
      ...Object.fromEntries([...searchParams]),
    });
  }, [searchParams]);

  if (loading) {
    return <Loading />;
  }
  if (blogs.length === 0) {
    return (
      <Wrapper>
        <div className="blogs-container" style={{ textAlign: "center" }}>
          <h2 style={{ textTransform: "capitalize" }}>
            None of the blog match your search
          </h2>
          <Link to="/">Back Home</Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div className="blogs-container">
        <h2 className="blogs-heading">{`${
          currentParams.categories
            ? currentParams.categories
            : currentParams.title
            ? currentParams.title
            : "all"
        } ${currentParams.title ? "results" : "posts"}`}</h2>
        {blogs.length > 3 && (
          <div className="blog-header">
            <Header blogs={blogs} />
          </div>
        )}
        <div className="blog-post-section">
          {currentItems.map((blog, id) => {
            return <BasicPost post={blog} key={id} left={true} />;
          })}
        </div>
        <ReactPaginate
          nextLabel="next"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="prev"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          disabledClassName="disable"
          renderOnZeroPageCount={null}
        />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  .blogs-container {
    padding: 2rem 1.5rem;
    .blogs-heading {
      text-transform: capitalize;
    }
    .blog-post-section {
      display: grid;
      margin: 2rem auto;
      column-gap: 2rem;
      .post-container {
        display: grid;
        grid-template-columns: 1fr;
        margin-top: 2rem;
      }
    }
    .pagination {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      list-style: none;
      cursor: pointer;
      .active {
        background: var(--secondary-700);
        a {
          color: white;
        }
      }
      .disable {
        a {
          color: var(--grey-clr);
        }
      }

      .page-item {
        margin: 0;
      }
      .page-link {
        width: 100%;
        padding: 0.5rem;
        font-size: 0.85rem;
        display: inline-block;
      }
      .page-item {
        border: 1px solid var(--secondary-500);
      }
    }
  }
  @media ${devices.tabletM} {
    .blog-header {
      .post-container {
        grid-template-columns: 550px 1fr !important;
      }

      .content-container {
        h3 {
          font-size: 2.7rem;
          max-width: 430px;
          margin-bottom: 1rem;
        }
        p {
          font-size: 1.1rem;
        }
        .read-btn {
          font-size: 1.1rem;
        }
      }
    }
    .blog-post-section {
      grid-template-columns: 1fr 1fr 1fr;
    }
    .pagination {
      .page-link {
        padding: 0.5rem 1rem !important;
        font-size: 0.85rem !important;
      }
    }
  }
  @media ${devices.tabletL} {
    .blog-header {
      .img-container {
        height: 370px;
        max-height: 370px !important;
      }
    }
  }
`;
export default Blogs;
