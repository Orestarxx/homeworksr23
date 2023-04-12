import React, {useEffect, useState} from 'react';
import {getPosts} from "../../services/jsonplaceholder.service/jsonplaceholder.service";
import PostBuild from "./PostBuild";

const Posts = () => {
    let [posts,setPosts] = useState([]);
    useEffect(() =>{
        getPosts().then(value => setPosts(value.data))
    },[])
    return (
        <div>
            posts.map(post =><PostBuild/>)
        </div>
    );
};

export default Posts;