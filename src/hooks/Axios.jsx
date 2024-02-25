import axios from "axios";
import { useNavigate } from "react-router-dom";
import UseAuthContext from "./AuthLoad";

const instance = axios.create({
  baseURL: 'https://khana-pina-server-rosy.vercel.app'
});

const Axios = () => {
  const navigate = useNavigate()
  const {logOut} = UseAuthContext()  
  instance.interceptors.request.use(function (config) {
    const token = localStorage.getItem('access-token')
    config.headers.authorization = `Bearer ${token}`
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    
    return response;
  }, function (error) {
    // console.log(error);
    if(error.response.status === 401 || error.response.status === 403){
      logOut()
      .then(()=>{
        navigate('/login')
      })
      .catch(err => console.log(err))
    }
    return Promise.reject(error);
  });


  return (
    instance
  );
};

export default Axios;