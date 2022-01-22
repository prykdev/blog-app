import { useState,useEffect } from "react";
import Header from "../../components/header/header";
import Post from "../../components/posts/posts";
import Sidebar from "../../components/sidebar/sidebar";
import axios from "axios";
import "./home.css";
export default function Home() {

  const [posts, setPosts] = useState([]);
  // const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const {data} = await axios.get("/api/posts");
      console.log(data);

      setPosts(data);
    };
    fetchPosts();
  }, []);
  return (
    <>
      <Header />
      <div className="home">
        <Post />
        <Sidebar />
      </div>
    </>
  );
}
