import React, {useState} from 'react'

type Props = {}

type Information = {
	name: string,
	description: string
}

type Todo = {
	id: number,
	test: string,
	done: boolean
}

//* type assertion with Generic
export function Counter({}: Props) {
	const [count, setCount ] = useState<number>(0);
  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);
	
	//* 필수는 아니지만, state가 null(대부분 초기상태)일수도 아닐수도 있을때나,
	const [information, setInformation] = useState<Information | null>(null);
	//* state의 type이 까다로운 구조를 가진 객체이거나 배열일 때
	const [todos, setTodos ] = useState<Todo[]>([]);



	return (
    <div>
		    <h1>{count}</h1>
			<button onClick={onIncrease}>Increase</button>
			<button onClick={onDecrease}>Decrease</button>
		</div>
        
  )	
}
