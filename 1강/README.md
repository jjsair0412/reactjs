# Day 1
## npx 명령어
```bash
# react app 생성
npx create-react-app {app_name}

npx create-react-app my-app

# react app 실행
npx start
```

## 1. JSX란 ?
- A syntax extension to JavaScript
    - 자바스크립트 확장 문법

Jsx는 js와 html/xml을 합친것
- 예시 : <h1> 헤더를 가진 html코드를 element에 대입

```jsx
// js와 html이 합쳐진 jsx 코드
const element = <h1>Hello , world !</h1>;
```

### 1-2. jsx 역할 ? 
xml , html을 js코드로 변환시킴

아래 createElement 함수가 jsx 코드를 생성시킴

```jsx
React.createElement{
    type,
    [props],
    [...children]
}
```

리엑트는 이런 createElement 함수를 실행시켜서 , js 객체를 만들어내고 , dom을 만드는데 사용하고 , 항상 최신 상태로 유지함
- 만들어진 객체를 element라 함

- 아래 두가지 const 모두 동일하게 작동함. 
```jsx
// jsx를 사용한 코드
const element = (
    <h1 className="greeting">
        hello, world !
    </h1>
)

// jsx를 사용하지 않은 코드
const element = React.createElement(
    'h1',
    { className: 'greeting' },
    'hello, world !'
)


// 위 코드 실행시 생성되는 jsx 객체
const element = {
    type: 'h1',
    props: {
        className: 'greeting',
        children: 'hello, world !'
    }
}
```