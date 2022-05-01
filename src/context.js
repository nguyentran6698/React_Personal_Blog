import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("http://localhost:3000/posts");
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [edit, setEdit] = useState(false);
  const [error, setError] = useState({ show: false, msg: "" });
  const fetchBlogs = async (url) => {
    try {
      setLoading(true);
      const { data } = await axios(url);
      setBlogs(data);
    } catch (err) {
      setError({ show: true, msg: err.message });
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchBlogs(query);
  }, [query, edit]);
  return (
    <AppContext.Provider
      value={{ loading, error, blogs, query, setQuery, setEdit }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppProvider };
