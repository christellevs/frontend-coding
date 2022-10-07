import type { NextPage } from "next";
import { useEffect, useState } from "react";
import * as API from "../utils/api";
import { PostProps } from "../utils/props";

const Feed: NextPage = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      const resPost = await API.getAllPosts();
      setPosts(resPost);
    };

    getPosts();
  }, []);

  // TODO - remove later
  console.log("posts: ", posts);
  return (
    <div>
      {posts.map((post) => (
        <p>{post.body}</p>
      ))}
    </div>
  );
};

export default Feed;
