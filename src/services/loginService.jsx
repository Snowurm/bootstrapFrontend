import axios from "axios";
const baseUrl = "http://localhost:3001/api/login";

const login = async (credentials) => {
    const response = await axios.post(baseUrl, credentials);
    localStorage.setItem("login", JSON.stringify(response.data));

    return response.data;
};
const logout = () => {
    localStorage.removeItem("login");
};

const loginExport = {
    login,
    logout,
};

export default loginExport;
