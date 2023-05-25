import React from "react";
import Comment from "./Comment";

const commentsli =[
    {
        name: "주진성",
        comment: "ㅎㅇㅋㅋ",
    },
    {
        name: "주징",
        comment: "ㅎㅇㅎㅇㅋㅋㅋ",
    },
    {
        name: "주징징이",
        comments: "ㅎㅇㅎㅇㅎㅇㅎㅇㅋㅋㅋ",
    },
];

function CommentList(props){
    return (
        <div>
            {
                commentsli.map((commentsli) => {
                    return (
                        <Comment name={commentsli.name} comment={commentsli.comment} />
                    );
                })
            }
        </div>
    );
}

export default CommentList;