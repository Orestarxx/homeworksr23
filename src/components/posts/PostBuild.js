import React from 'react';


const PostBuild = ({post,lift,postsBody}) => {
    let {id,title,userId,body} = post;
    return (
        <div>
            <div>{id}</div>
            <div>{title}</div>
            <button onClick={() =>{
                lift(post)
            }}>click</button>

        </div>
    );
};

export default PostBuild;