import axios from "axios";
const baseUrl = "http://localhost:3001/api/blogs";

const getAllBlogs = async () => {
    const response = await axios.get(baseUrl);
    return response.data;
};

const getBlog = async (id) => {
    const response = await axios.get(`${baseUrl}/${id}`);
    return response.data;
};

const createBlog = async (blog, user) => {
    const authString = `bearer ${user.data.token}`;
    const config = {
        headers: { Authorization: authString },
    };
    const response = await axios.post(baseUrl, blog, config);
    return response.data;
};

const getAllComments = async (id) => {
    const response = await axios.get(`${baseUrl}/${id}`);
    return response.data;
};

const createComment = async (id, comment /*,user*/) => {
    // const authString = `bearer ${user.data.token}`;
    // const config = {
    //   headers: { Authorization:authString }
    // };
    const response = await axios.post(`${baseUrl}/${id}`, comment);
    return response.data;
};

const deleteComment = async (id, commentId /*token*/) => {
    // const authString = `bearer ${token}`;
    // const config = {
    //     headers: { Authorization: authString }
    // };
    const response = await axios.delete(`${baseUrl}/${id}/${commentId}`);
    return response.data;
};

const updateBlog = async (id, newObject) => {
    const response = await axios.put(`${baseUrl}/${id}`, newObject);
    return response.data;
};

const deleteBlog = async (blog, token) => {
    const authString = `bearer ${token}`;
    const config = {
        headers: { Authorization: authString },
    };
    const response = await axios.delete(`${baseUrl}/${blog.id}`, config);
    return response.data;
};

const blogsExport = {
    getAllBlogs,
    getBlog,
    createBlog,
    updateBlog,
    deleteBlog,
    getAllComments,
    createComment,
    deleteComment,
};

export default blogsExport;
