//* TS로 인풋상태 관리하기
import React, { useState, useRef } from 'react'

type Props = {}

type Form = {
    name: string,
    description: string
}

type FormProps = {
    onSubmit: (form: {name: string, description: string}) => void;
}

export function Form({onSubmit}: FormProps) {
    //* useRef로 DOM의 정보를 담을 땐, 초깃값을 null로 설정하고 값을 사용하기 위해 null체킹도 필요하다
    const inputRef = useRef<HTMLInputElement>(null);

    const [form, setForm] = useState<Form>({
        name: '',
        description: ''
    });

    const { name, description } = form;
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        //* e의 타입이 무엇인지 모르면 input tag의 onChange를 hover해보세요
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(form);
        setForm({
            name: '',
            description: ''
        });
        if (!inputRef.current) {
            return;
        }
        inputRef.current.focus();
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <input name="name" value={name} onChange={onChange} ref={inputRef}/>
            <input name="description" value={description} onChange={onChange} />
            <button type="submit">등록</button>
        </form>
    )
}
