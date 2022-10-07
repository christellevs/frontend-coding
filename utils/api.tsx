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

/*
  get all images from an album as 5000 imgs was timing out.
  If done in real project, i'd work on pagination
*/
export const getAllImages = async () =>
  fetch(`${api}/albums/1/photos`, { headers, method: "GET" }).then((data) =>
    data.json()
  );
