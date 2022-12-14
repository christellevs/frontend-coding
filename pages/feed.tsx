import type { NextPage } from "next";
import { useEffect, useState } from "react";
import * as API from "../utils/api";
import { PostProps } from "../utils/props";
import Post from "../components/Post";
import Typography from "@mui/material/Typography";

const Feed: NextPage = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      const resPosts = await API.getAllPosts();
      setPosts(resPosts);
    };
    getPosts();
  }, []);

  // TODO - remove later
  console.log("posts: ", posts);

  return (
    <div className="post-container">
      <Typography align="center" variant="h2">
        Posts
      </Typography>
      {posts.length > 0 ? (
        posts.map((post) => <Post {...post} />)
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Feed;
