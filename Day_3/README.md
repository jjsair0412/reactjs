# State and Lifecycle
## State ?
리액트에서 State는 , 리액트 Component의 상태를 의미합니다. 
- 리액트 Component의 변경 가능한 데이터를 의미합니다.

State는 개발자가 정의합니다.

랜더링이나 데이터 흐름에 사용되는 값만 State에 포함시켜야 합니다.

**State는 JavaScript 객체 입니다.**

**State는 직접 수정할 수는 있지만 ,, 수정하면 안됩니다.**
- State값을 수정하고 싶다면, setState 함수를 통해서 수정해야만 합니다.
```jsx
// state를 직접 수정하는 방법 ( 잘못된 사용법 )
this.state = {
    name: 'Inje'
};

// setState 함수를 통한 수정 ( 정상 사용법 )
this.setState(
    {
        name: 'Inje'
    }
);
```

## Lifecycle
리액트 컴포넌트는, 생명주기를 가지고 있습니다.
- 중요 : Component는 계속 존재하는것이 아니라 , 시간에 흐름에 따라 생성되고 업데이트 되다가 사라진다는 점 입니다..

- 리액트 클래스 컴포넌트의 생명주기 

![lifecycle][lifecycle]

[lifecycle]:./images/lifecycle.png

1. Mounting
    - 컴포넌트의 State 지정
    - component 랜더링됨
    - componentDidMount 함수가 호출됨

2. Updating
    - props 지정
    - setState() 함수로 State 변화
    - forceUpdate() 함수로 강제 Update
    - 랜더링 이후 componentDidUpdate 함수가 호출됨

3. Unmounting
    - 상위 컴포넌트에서 현재 컴포넌를 현재 page에서 표시하지 않게 될때 , Unmounte 됨.
    - 이때 componentWillUnmount 함수가 호출됨   