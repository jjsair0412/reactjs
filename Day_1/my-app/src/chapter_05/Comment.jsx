import React from "react";

const style = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16,
    },
    imageContainer: {},
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    contentContainer: {
        marginLeft: 8,
        display: "flex",
        flexDirection: "column",
        justifyContnet: "center",
    },
    nameText: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
    },
    commentText: {
        color: "black",
        fontSize: 16,
    },
};

function Component(props){
    return (
        <div style={style.wrapper}>
            <div style={style.imageContainer}>
                <img 
                    src="https://upload.wikimedia.org./wikipedia/commons/8/89/Portrait_Placeholder.png"
                    style={style.image}
                />
            </div>
            <CommentUser 
                name={props.name}
                comment={props.comment}
            />
        </div>
    );
}

function CommentUser(props){
    return (
        <div style={style.contentContainer}>
        <span style={style.nameText}>{props.name}</span>
        <span style={style.commentText}>{props.comment}</span>
    </div>
    );
}

export default Component;