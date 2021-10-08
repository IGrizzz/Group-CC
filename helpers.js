export const getPosts = async () => {
  try {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=16')
    .then(response => response.json())
    return posts;
  } catch (error) {
    console.log('getPosts', error);
    throw error;
  }
};

export const getPost = async (post_id) => {
  // EDIT HERE
  try {
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}`)
    .then(response => response.json())
    return posts;
  } catch (error) {
    console.log('getPost', error);
    throw error;
  }
};

export const getPostComments = async (post_id) => {
  // EDIT HERE
  try {
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts/comments/${post_id}`)
    .then(response => response.json())
    return posts;
  } catch (error) {
    console.log('getPostComments', error);
    throw error;
  }
};

export const getAuthor = async (user_id) => {
  // EDIT HERE
  try {
    const posts = await fetch(`https://jsonplaceholder.typicode.com/users/${user_id}`)
    .then(response => response.json())
    return posts;
  } catch (error) {
    console.log('getAuthor', error);
    throw error;
  }
};

export const getPostsByAuthor = async (author_id) => {
  // EDIT HERE
  try {
    const posts = await fetch(`https://jsonplaceholder.typicode.com/users/${author_id}/posts/`)
    .then(response => response.json())
    return posts;
  } catch (error) {
    console.log('getPostsByAuthor', error);
    throw error;
  }
};

export const getRandomPic = async () => {
  try {
    const image = await fetch('https://source.unsplash.com/random/720x480');
    return image.url;
  } catch (error) {
    console.log('getRandomPic', error);
    throw error;
  }
};

export const getRandomProfile = async () => {
  try {
    const image = await fetch('https://source.unsplash.com/480x480/?profile');
    return image.url;
  } catch (error) {
    console.log('getRandomProfile', error);
    throw error;
  }
};
