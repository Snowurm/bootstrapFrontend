import axios from "axios";
const baseUrl = "http://localhost:3001/api/blogs";

// const getAllBlogs = async () => {
//   const response = await axios.get(baseUrl);
//   return response.data;
// };

const getAllComments = async (blogId) => {
    const response = await axios.get(`${baseUrl}/${blogId}/comments`);
    return response.data;
};

// const getBlog = async (id) => {
//   const response = await axios.get(`${baseUrl}/${id}`);
//   return response.data;
// };

const getComment = async (blogId, commentId) => {
    const response = await axios.get(
        `${baseUrl}/${blogId}/comments/${commentId}`
    );
    return response.data;
};

// const createBlog = async (blog,user) => {
//   const authString = `bearer ${user.data.token}`;
//   const config = {
//     headers: { Authorization:authString }
//   };
//   const response = await axios.post(baseUrl,blog,config);
//   return response.data;
// };

const createComment = async (blogId, comment /*,user*/) => {
    // const authString = `bearer ${user.data.token}`;
    // const config = {
    //   headers: { Authorization:authString }
    // };
    const response = await axios.post(`${baseUrl}/${blogId}/comments`, comment);
    return response.data;
};

// const updateBlog = async (id, newObject) => {
//   console.log(id, newObject);
//   console.log(`${baseUrl}/${id}`, newObject);
//   const response = await axios.put(`${baseUrl}/${id}`, newObject);
//   return response.data;
// };

const updateComment = async (blogId, commentId, comment) => {
    const response = await axios.put(
        `${baseUrl}/${blogId}/comments/${commentId}`,
        comment
    );
    return response.data;
};

// const deleteBlog = async (blog,token) => {
//   const authString = `bearer ${token}`;
//   const config = {
//     headers: { Authorization:authString }
//   };
//   const response = await axios.delete(`${baseUrl}/${blog.id}`,config);
//   return response.data;
// };

const deleteComment = async (blogId, commentId) => {
    const response = await axios.delete(
        `${baseUrl}/${blogId}/comments/${commentId}`
    );
    return response.data;
};

const commentsExport = {
    getAllComments,
    getComment,
    createComment,
    updateComment,
    deleteComment,
};

export default commentsExport;

// import axios from 'axios';
// const baseUrl = 'http://localhost:3001/api/blogs/';

// const getAllBlogs = async () => {
//   const response = await axios.get(baseUrl);
//   return response.data;
// };

// const getBlog = async (id) => {
//   const response = await axios.get(`${baseUrl}/${id}`);
//   return response.data;
// };

// const createBlog = async (blog,user) => {
//   const authString = `bearer ${user.data.token}`;
//   const config = {
//     headers: { Authorization:authString }
//   };
//   const response = await axios.post(baseUrl,blog,config);
//   return response.data;
// };

// const updateBlog = async (id, newObject) => {
//   console.log(id, newObject);
//   console.log(`${baseUrl}/${id}`, newObject);
//   const response = await axios.put(`${baseUrl}/${id}`, newObject);
//   return response.data;
// };

// const deleteBlog = async (blog,token) => {
//   const authString = `bearer ${token}`;
//   const config = {
//     headers: { Authorization:authString }
//   };
//   const response = await axios.delete(`${baseUrl}/${blog.id}`,config);
//   return response.data;
// };

// const blogsExport = {
//   getAllBlogs,
//   getBlog,
//   createBlog,
//   updateBlog,
//   deleteBlog
// };

// export default blogsExport;
