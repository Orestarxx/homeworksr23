import React from 'react';


const PostBuild = ({post,lift}) => {
    let {id,title} = post;
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