import axios from "axios";

const instance = axios.create({
    baseURL: 'https://khana-pina-server-rosy.vercel.app'
})
const AxiosPublic = () => {
    return instance
};

export default AxiosPublic;