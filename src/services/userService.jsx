import axios from "axios";
const baseUrl = "http://localhost:3001/api/users";

const getAllUsers = async () => {
    const response = await axios.get(baseUrl);
    return response.data;
};

const getUser = async (id) => {
    const response = await axios.get(`${baseUrl}/${id}`);
    return response.data;
};

const createUser = async (user) => {
    const response = await axios.post(user);
    return response.data;
};

const updateUser = async (user) => {
    const response = await axios.put(`${baseUrl}/${user.id}`, user);
    return response.data;
};

const deleteUser = async (user, token) => {
    const authString = `bearer ${token}`;
    const config = {
        headers: { Authorization: authString },
    };
    const response = await axios.delete(`${baseUrl}/${user.id}`, config);
    return response.data;
};

const usersExport = {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
};

export default usersExport;
