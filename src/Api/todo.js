import axios from "axios";



const instance = axios.create({
    baseURL: 'https://todo-list-react-ad3c0-default-rtdb.firebaseio.com',
    timeout:10000,
})


instance.interceptors.request.use(function(config){
return config;
},function(err){
    //handel error
    return Promise.reject(err)
})



instance.interceptors.response.use(function(response){
return response
},function(err){
    console.log('InterceptorsResponseError', err)
    return Promise.reject(err)
})

export default instance