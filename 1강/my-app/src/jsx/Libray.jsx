import React from "react";
// jsx 컴포넌트 import
import Book from "./Book";

function Library(props){
    return (
        // import한 Book 컴포넌트 내부의 Book function에 인자값 전달.
        // props -> 파라미터 , name에 책 2, 1, 3 , numOfPage에 400, 500, 600
        <div>
            <Book name="책2번" numOfPage={400}></Book>
            <Book name="책1번" numOfPage={500}></Book>
            <Book name="책3번" numOfPage={600}></Book>
        </div>
    );
}

export default Library