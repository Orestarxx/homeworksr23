import React, {useEffect, useState} from 'react';
import {getPosts} from "../../services/jsonplaceholder.service/jsonplaceholder.service";
import PostBuild from "./PostBuild";

const Posts = () => {
    let [posts,setPosts] = useState([]);
    let [postsBody,setPostsBody] = useState(null);
    const lift = (obj) =>{
        setPostsBody({...obj})
    }
    console.log(postsBody);
    useEffect(() =>{
        getPosts().then(value => setPosts(value.data))
    },[])
    return (
        <div>
            {posts.map(post => <PostBuild post={post} key={post.id} lift={lift} postsBody={postsBody}/>)}
            {postsBody && <div>{postsBody.id}</div>}
        </div>
    );
};

export default Posts;