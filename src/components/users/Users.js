import React, {useEffect, useState} from 'react';

import '../mainStyle/mainStyle.css'
import {getPostsOfUser, getUsers} from "../../services/jsonplaceholder.service/jsonplaceholder.service";
import UserBuild from "./UserBuild";
import CurrentPostsOfUser from "./CurrentPostsOfUser";

const Users = () => {
    let [users,setUsers] = useState([])
    let [userPost,setUserPost] = useState(null)
    const userPosts = (userId) =>{
        getPostsOfUser(userId).then(value => setUserPost(value.data))
    }
    useEffect(() =>{
        getUsers().then(value => setUsers(value.data))
    },[])
    return (
        <div className={'holder'}>
            <div className={'leftSide'}>{users.map(user => <UserBuild user={user} key={user.id} userPost={userPosts}/> )}</div>
            <div className={'rightSide'}>{userPost && userPost.map(value => <CurrentPostsOfUser userPosts={value} key={value.id}/>)}</div>
        </div>
    );
};

export default Users;