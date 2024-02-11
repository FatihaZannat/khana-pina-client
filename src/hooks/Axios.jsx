import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5000'
  });

const Axios = () => {
    return (
       instance
    );
};

export default Axios;