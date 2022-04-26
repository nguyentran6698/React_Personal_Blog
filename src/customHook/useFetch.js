import React, { useEffect, useState } from "react";
import { blogSample } from "../data";
const useFetch = (urlParams) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });
  const [blogs, setBlogs] = useState([]);
  const fetchBlogs = async (url) => {
    setBlogs(blogSample);
  };
  useEffect(() => {
    fetchBlogs("customEndPoint");
  }, [urlParams]);
  return { loading, error, blogs };
};

export default useFetch;
