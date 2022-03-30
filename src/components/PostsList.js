import React from 'react';
import PostContent from './PostContent';
import { useState } from 'react';

function PostsList(){

    let data = [
    {
        id: 1,
        img: "https://thumbs.dreamstime.com/b/modern-computer-programming-code-screen-showing-random-scripts-113805394.jpg",
        title: "image_1",
        content: "Aš mokausi HTML",
        status: false
    },
    {
        id: 2,
        img: "https://media.istockphoto.com/photos/programming-source-code-abstract-background-picture-id1047259374?k=20&m=1047259374&s=612x612&w=0&h=pt3XbBvrmiYgoYmVzsaUeXtV8vw_jJI9Ly8P7AL6Qig=",
        title: "image_2",
        content: "Aš mokausi CSS",
        status: false
    },
    {
        id: 3,
        img: "https://media.istockphoto.com/photos/desktop-source-code-and-wallpaper-by-computer-language-with-coding-picture-id1020981434?k=20&m=1020981434&s=170667a&w=0&h=zcFrFy2oTNp3x-bQeOGiz1XMZdnOSWrFlcIMaYUyZDs=",
        title: "image_3",
        content: "Aš mokausi JS",
        status: false
    }
    ]

    const [posts, setPosts] = useState(data);

    function changeStatus(id){
        const updatePosts = [...posts];
        updatePosts.forEach((post) => {
            if(post.id == id){
                post.status = true;
            }
        });
        setPosts(updatePosts);
    }


const postsList = posts.map((post) => {
    return (
        <PostContent
        key={post.id}
        id={post.id}
        title={post.title}
        content={post.content}
        img={post.img}
        status={post.status}
        changeStatus={changeStatus}
        />
    );
});
return <div className="row">{postsList.length ? postsList : "Empty"}</div>
}

export default PostsList