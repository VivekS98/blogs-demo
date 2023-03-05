export const getPosts = async (id?: string, page?: string, userId?: string) => {
  const post = id ? "/id" : "";
  const user = userId ? `userId=${userId}` : "";
  const paginate = `?_page=${page}&_limit=25`;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts${post}${paginate}${user}`
  );
  return await response.json();
};

export const getUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return await response.json();
};
