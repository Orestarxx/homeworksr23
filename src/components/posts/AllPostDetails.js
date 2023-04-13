import React from 'react';

const AllPostDetails = ({postBody}) => {
    let {id,title,body,userId} = postBody;
    return (
        <div>
            <div><b>ID: </b>{id}</div>
            <div><b>userId: </b>{userId}</div>
            <div><b>title: </b>{title}</div>
            <div><b>body: </b>{body}</div>
        </div>
    );
};

export default AllPostDetails;