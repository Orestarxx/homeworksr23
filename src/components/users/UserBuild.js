import React from 'react';

const UserBuild = ({user,userPost}) => {
    let {name,username} = user;
    return (
        <div>
            <div>{name} - {username}</div>
            <button onClick={() =>{
                userPost(user.id)
            }}>Posts</button>

        </div>
    );
};

export default UserBuild;