import { useState } from "react";

export default function ToDoList() {
    const [toDo, setToDo] = useState("");
    const [toDoError, setToDoError] = useState("");
    const onChange = (event: React.FormEvent<HTMLInputElement>) => {
        const {
            currentTarget: { value },
        } = event;
        setToDoError("");
        setToDo(value);
    };
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (toDo.length < 10) {
            return setToDoError("To do should be longer");
        }
        console.log("submit", toDo);
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
                {toDoError !== "" ? toDoError : null}
            </form>
        </div>
    );
}
