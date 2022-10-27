import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Header from "../../components/header/Header.jsx";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    axios.get("/posts" + search).then((res) => {
      setPosts(res.data);
    });
    // const fetchPosts = async () => {
    //   const res = await axios.get("http://localhost:8000/api/posts");
    //   console.log(res);
    // };
    // fetchPosts();
  }, [search]);

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
};
export default Home;
