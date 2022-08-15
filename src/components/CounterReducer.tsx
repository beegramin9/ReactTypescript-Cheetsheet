import React, {useReducer} from 'react'

type Action = { type: "INCREASE"} | { type: "DECREASE"};
//* action 객체의 속성이 type이외에도 다른 여러 속성들이 있다면
//* 추후 리듀서를 작성할 때 속성 자동완성도 가능합니다
//* 리듀서에서는 arg의 state와 return의 state가 같은 타입이어야 합니다
function reducer(state: number, action: Action):number {
    switch (action.type) {
        case "INCREASE":
            return state + 1;
        case "DECREASE":
            return state - 1;
        default:
            throw new Error("Unhandled action");
    }
}

export function CounterReducer() {
    const [count, dispatch ] = useReducer(reducer, 0);
    const onIncrease = () => dispatch({ type: "INCREASE"});
    const onDecrease = () => dispatch({ type: "DECREASE"});

    return (
        <div>
            <h1>{count}</h1>
            <div>
                <button onClick={onIncrease}>+1</button>
                <button onClick={onDecrease}>-1</button>
            </div>
        </div>
    )
}