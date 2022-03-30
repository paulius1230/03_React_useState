import React from 'react';

function PostContent(props){
    let { id, title, content, img, status, changeStatus } = props;
    return (
        <div className="col-4 p-4">
            <img src={img} alt={title} className="img-fluid" />
            <p>{content}</p>
            <p>{status ? "Išmokau" : "Mokausi"}</p>
            <button onClick={() => changeStatus(id)} className="btn btn-light">
                OK
            </button>
        </div>
    );
}

export default PostContent