// import { useEffect, useState } from "react";

// const useFetch = (urlParams) => {
//   const [loading, setLoading] = useState(true);
//

//   const fetchBlogs = async (url) => {
//     try {
//       setLoading(true);
//       const { data } = await axios(url);
//       setBlogs(data);
//     } catch (err) {
//       setError({ show: true, msg: err.message });
//     }
//     setLoading(false);
//   };
//   useEffect(() => {
//     fetchBlogs(urlParams);
//   }, [urlParams]);
//   return { loading, error, blogs };
// };

// export default useFetch;
