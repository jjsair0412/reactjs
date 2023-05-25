# DAY 2
## Element 란 ?
- React의 Element는 , 리액트 앱을 구성하는 가장 작은 블록을 의미한다.
- Dom elements의 가상 elements를 의미한다.

## Element의 생김새
- 리액트 Element는 js 객체 형태로 존재한다.
- 아래 javascript 코드가 Element.
    - type에 문자열로된 html 코드가 들어간 경우
```js
// 랜더링 전
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

// 랜더링 후
<button class='bg-green'>
    <b>
        Hello, element!
    </b>
</button>
```

    - type에 리액트 컴포넌트 이름이 들어간 경우 
    - React.createElement로 리액트 앨리먼트로 변환됨
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
    - React.createElement로 리액트 앨리먼트를 생성
```jsx
React.createElement{
    type,
    [props],
    [...children]
}
```

## Element 불변성
- Element는 한번 생성된 다음부턴 변경될 수 없다.

## Element 랜더링하기
- 아래 div태그는 리액트의 필수 태그.
- 모든 리액트로 되어있는 페이지는 , root id를 가진 div태그가 필요하고 , 이게 최상단 dom 엘리먼트가 된다,. 
- dom element는 실제 브라우저에 존재하는 element 이고 , 리액트 앨리먼트는 가상의 Dom
- 따라서 랜더링하는 과정은 , 앨리먼트가 가상의 Dom에서 실제 Dom으로 이동하는 과정이라고 생각하면 됨
```html
<div id="root"></div>
```

- 그리고 리액트 앱을 랜더링 할때 , 해당 root dom을 통해서 랜더링하게 된다.
- element 변수를 생성하고 root div에 랜더링하는 코드
```jsx
const element = <h1>안녕, 리액트!</h1>;
ReactDOM.render(element, document.getElementById('root));
```

## 랜더링된 Element update하는방안
- 특정 기간마다 새로운 앨리먼트를 생성해서 계속 랜더링하며 바꿔치기하면 된다.
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