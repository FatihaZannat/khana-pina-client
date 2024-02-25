import axios from "axios";

const axi = axios.create(
    {
    baseURL:'https://khana-pina-server-rosy.vercel.app'
})
const axiosFile = () => {
    return axi
};

export default axiosFile;