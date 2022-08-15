import React from 'react'
import { Counter, CounterReducer, ReducerSample, Form } from '../components';

type Props = {}
export function Main({}: Props) {

    const onSubmit = (form : {name:string, description: string}) => {
        console.log(form);
    }
    return (
        <div>
            <Counter/>
            <CounterReducer/>
            <ReducerSample/>
            <Form onSubmit={onSubmit}/>
        </div>
    )
}