import axios from "axios";

let axiosInstance = axios.create({
    baseURL:'https://api.spacexdata.com'
});

const getSpaceX = () =>{
    return axiosInstance.get('/v3/launches/')
}

export {getSpaceX}