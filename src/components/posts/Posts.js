import React, {useEffect, useState} from 'react';

import '../mainStyle/mainStyle.css'
import {getPosts} from "../../services/jsonplaceholder.service/jsonplaceholder.service";
import PostBuild from "./PostBuild";
import AllPostDetails from "./AllPostDetails";

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
        <div className={'holder'}>
            <div className={'leftSide'}>{posts.map(post => <PostBuild post={post} key={post.id} lift={lift} />)}</div>
            <div className={'rightSide'}>{postsBody && <AllPostDetails postBody={postsBody}/>}</div>
        </div>
    );
};

export default Posts;