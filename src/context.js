import React, { useContext, useState } from "react";
import useFetch from "./customHook/useFetch";
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("http://localhost:3000/posts");
  const { loading, error, blogs } = useFetch(query);
  return (
    <AppContext.Provider value={{ loading, error, blogs, query, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppProvider };
