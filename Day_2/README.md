# DAY 2
- [Element란 ?](#element-란)
- [Components와 Props](#Components와-Props)
## Element 란 ?
- React의 Element는 , 리액트 앱을 구성하는 가장 작은 블록을 의미한다.
- Dom elements의 가상 elements를 의미한다.

## Element의 생김새
- 리액트 Element는 js 객체 형태로 존재한다.
- 아래 javascript 코드가 Element.
    - type에 문자열로된 html 코드가 들어간 경우
```js
// 렌더링 전
{
    type: 'button',
    props:{
        className: 'bg-green',
        children: {
            type: 'b', // 문자열로 된 html 태그이름이 type
            props: {
                children: 'Hello element!'
            }
        }
    } 
}

// 렌더링 후
<button class='bg-green'>
    <b>
        Hello, element!
    </b>
</button>
```

    - type에 리액트 컴포넌트 이름이 들어간 경우 
    - React.createElement로 리액트 엘리먼트로 변환됨
    - type에 리액트 컴포넌트 이름이 들어갓을 때 , 부모자식 관계를 가질 수 있고 html태그가 들어가야만 하기 때문에 , 타고들어가면 결국 html 태그값이 들어감.
```js
{
    type: Button,
    props: {
        color: 'green',
        children: 'Hello, element!'
    }
}
```
    - React.createElement로 리액트 엘리먼트를 생성
```jsx
React.createElement{
    type,
    [props],
    [...children]
}
```

## Element 불변성
- Element는 한번 생성된 다음부턴 변경될 수 없다.

## Element 렌더링하기
- 아래 div태그는 리액트의 필수 태그.
- 모든 리액트로 되어있는 페이지는 , root id를 가진 div태그가 필요하고 , 이게 최상단 dom 엘리먼트가 된다,. 
- dom element는 실제 브라우저에 존재하는 element 이고 , 리액트 엘리먼트는 가상의 Dom
- 따라서 렌더링하는 과정은 , 엘리먼트가 가상의 Dom에서 실제 Dom으로 이동하는 과정이라고 생각하면 됨
```html
<div id="root"></div>
```

- 그리고 리액트 앱을 렌더링 할때 , 해당 root dom을 통해서 렌더링하게 된다.
- element 변수를 생성하고 root div에 렌더링하는 코드
```jsx
const element = <h1>안녕, 리액트!</h1>;
ReactDOM.render(element, document.getElementById('root));
```

## 렌더링된 Element update하는방안
- 특정 기간마다 새로운 엘리먼트를 생성해서 계속 렌더링하며 바꿔치기하면 된다.
- 현재 시간을 출력하는 코드
```jsx
function tick(){
    const element = (
        <div>
            <h1>안녕</h1>
            <h2>현재 시간 : {new Date().toLocaleTimeString()}</h2>
        </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);
```

## Components와 Props
### Component란 ?
- 리액트는 모든 페이지가 컴포넌트로 구성되어있으며 , 하나의 컴포넌트에는 여러 컴포넌트를 import시킬 수 있다.
- 개념적으론 js의 function과 비슷함. 입력받아서 정해진 출력이 나옴
    - 리액트 컴포넌트의 입력은 , Porps가 되고 , 출력은 리액트 엘리먼트가 됨.
    - **리엑트 컴포넌트의 역할은 , 어떤 속성들을 입력으로 받아서 , 그에 맞는 리액트 엘리먼트를 생성해 출력해주는 것**
    - Props : 속성 
- **모든 리액트 컴포넌트는 Props를 바꿀 수 없으며 ,. 같은 Props에 대해선 항상 같은결과값이 나와야 한다**

#### Compoent 만들기
- 리액트 컴포넌트는 , **class 컴포넌트**와 **funciton 컴포넌트**로 나뉨
    - 현재는 함수형 컴포넌트를 많이 사용함.
```jsx
// 함수 컴포넌트
function Welcome(props){
    retrun <h1>안녕 , {props.name}</h1>;
}

// class 컴포넌트
class Welcome extends React.Component { // React.Component를 상속받아서 생성
    render(){
        return <h1>안녕 , {this.props.name}</h1>;
    }
}
```

- **컴포넌트 이름은 항상 대문자로 시작해야 한다 !!!**
    - 리액트는 첫글자가 소문자인 컴포넌트는 Dom 태그로 인식하기 때문이다.
    - <div> , <span> 이런거 . 내장 컴포넌트를 의미하고 , div나 span과 같은 문자열 형태로 React.createElement에 전달됨.
    - 앞글자가 대문자일 경우 , 사용자가 리액트파일 내에서 정의했거나 생성한 컴포넌트를 가르킴.
```jsx
// 돔 태그로 인식
const element = <div />

// 사용자가 생성한 컴포넌트로 인식,, 소문자를 쓰면 에러가 나거나 원하는대로 결과값이 안나옴
const element = <Welcome name="인제" />
```

- 컴포넌트 렌더링
```jsx
function Welcome(props){
    return <h1> 안녕 {props.name}</h1>;
}

const element = <Welcome name="인제" />

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Welcome />
  </React.StrictMode>
);
```

### Props 란 ?
- Props는 Prop의 복수형을 의미
- Prop은 , Property를 의미
- Property는 속성이라는 의미를 가지고 있는데 , 리액트의 Props는 리액트 Component의 속성을 의미한다.
- **컴포넌트에 전달할 다양한 정보를 담고 있는 자바스크립트 객체를 Props라 함**
#### Props의 중요 특징
1. ReadOnly
- 값을 변경할 수 없다.

#### Props의 사용법
- 일반 사용법
```jsx
function App(props){
    return (
        <Profile // Profile의 props에 name , introduction , viewCount를 넣어줌
            name="진성"
            introduction="안녕하세요"
            viewCount={1500} // 중괄호를 사용하여 js코드가 들어감 , 정수 , 변수를 넣을땐 무조건 {} 안에 들어가야함
        />
    );
}
```

- Props에 html 태그 주입
```jsx
function App(props){
    return (
        <Layout
            width={2500}
            height={1400}
            header={ // HTML 태그 넣어줄수 있음.
                <Header title="안녕하세요,진성의 git입니다."/>
            }
            footer={
                <Footer />
            }
        />
    )
}
```

- jsx를 사용하지 않는다면 , createElement 함수를 사용하면 됨.
- 첫번째 사용법 예시와 동일 동작
```jsx
React.createElement{
    type,
    [props],
    [...children]
}
```
- 실 예시
```js
React.createElement(
    Profile,
    {
        name: "진성",
        introduction: "안녕하세요",
        viewCount: 1500
    },
    null
);
```