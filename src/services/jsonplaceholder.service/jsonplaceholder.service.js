import axios from 'axios';

 let axiosInstance = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com',
    headers:{}
});

const getUsers = () =>{
     return axiosInstance.get('/users')
};
const getPosts = () =>{
    return axiosInstance.get('/posts')
};
const getPostsOfUser = (id) =>{
    return axiosInstance.get(`/users/`+ id +'/posts')
}

 export {getUsers,getPosts,getPostsOfUser};
