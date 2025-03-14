import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Post from "./post/post";
import { userContext } from "../../Context/User.context";

export default function ContainerPost() {
  const { token } = useContext(userContext);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function getPosts() {
      try {
        const res = await axios.get(
          "https://mohamednowar.pythonanywhere.com/api/posts/",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: token,
            },
          }
        );

        setPosts(res.data);
      } catch (e) {
        console.log(e);
      }
    }
    getPosts();
  }, [token]);
  return (
    <section className="container mx-auto flex flex-col items-center gap-8">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </section>
  );
}




