import { useState } from "react";

export default function ToDoList() {
    const [toDo, setToDo] = useState("");
    const onChange = (event: React.FormEvent<HTMLInputElement>) => {
        const {
            currentTarget: { value },
        } = event;
        setToDo(value);
    };
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(toDo);
    };
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    value={toDo}
                    onChange={onChange}
                    placeholder="Write a todo!"
                />
                <button>add</button>
            </form>
        </div>
    );
}
