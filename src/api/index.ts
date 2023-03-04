export const getPosts = async (id?: string, page?: string) => {
  const postId = id ? "/id" : "";
  const paginate = `?_page=${page}&_limit=25`;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts${postId}${paginate}`
  );
  return await response.json();
};

export const getUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return await response.json();
};
