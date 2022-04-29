import { useEffect, useState } from "react";
import { blogSample } from "../data";
const useFetch = (urlParams) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });
  const [blogs, setBlogs] = useState([]);
  const fetchBlogs = async (url) => {
    try {
      setBlogs(blogSample);
    } catch (err) {
      setError({ show: true, msg: err.message });
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchBlogs(urlParams);
  }, [urlParams]);
  return { loading, error, blogs };
};

export default useFetch;
