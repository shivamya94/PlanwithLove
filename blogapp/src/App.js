import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Pagination from "./components/Pagination";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import "./App.css"
import {Route, Routes} from "react-router-dom"

export default function App() {
  const {fetchBlogPosts} = useContext(AppContext);

  useEffect( () => {
    fetchBlogPosts();
  },[]);
  return (
    <Routes>
      <Route path="/" element ={<Home/>} />
      <Route path="/blog/:blogId" element ={<BlogPage/>} />
      <Route path="/tags/:tag" element ={<TagPage/>} />
      <Route path="/categories/:category" element ={<CategoryPage/>} />
    </Routes>
   
  );
}