import axios from "axios";

const axi = axios.create(
    {
    baseURL:'http://localhost:5000'
})
const axiosFile = () => {
    return axi
};

export default axiosFile;