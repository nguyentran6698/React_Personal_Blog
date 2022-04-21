import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayoutPage from "./Pages/SharedLayoutPage";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Blogs from "./Pages/Blogs";
import SharedBlogLayout from "./Pages/SharedBlogLayout";
import SingleBlog from "./Pages/SinglePage";
import ErrorPage from "./Pages/ErrorPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayoutPage />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blogs" element={<SharedBlogLayout />}>
            <Route index element={<Blogs />} />
            <Route path=":blogId" element={<SingleBlog />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
