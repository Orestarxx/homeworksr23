

const CurrentPostsOfUser = ({userPosts}) => {
    let {id,userId,title,body} = userPosts
    return (
        <div>
           <div><b>ID: </b>{id}</div>
            <div><b>userID: </b>{userId}</div>
            <div><b>title: </b>{title}</div>
            <div><b>body: </b>{body}</div>
        </div>
    );
};

export default CurrentPostsOfUser;