const api = "https://jsonplaceholder.typicode.com";

let token = Math.random().toString(36).substr(-8);

const headers = {
  Accept: "application/json",
  Authorization: token,
};

export const getAllPosts = async () =>
  fetch(`${api}/posts`, { headers, method: "GET" }).then((data) => data.json());

export const getCommentsByPost = async (postId: number) =>
  fetch(`${api}/posts/${postId}/comments`, { headers, method: "GET" }).then(
    (data) => data.json()
  );
