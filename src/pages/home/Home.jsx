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
      const res = await axios.get("short.grawish.com/api/posts");
      const data = await res.json();
      console.log(data);

      // setPosts(res.data);
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
