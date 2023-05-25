import React from "react";

function Book(props){
    return (
        <div>
            <h1>{`이 책의 이름은 ${props.name} 입니다.`}</h1>
            <h1>{`이 책은 총 ${props.numOfPage} 페이지로 이루어져 있습니다.`}</h1>
        </div>
    );
}


// Book이라는 이름으로 컴포넌트 EXPORT
export default Book;