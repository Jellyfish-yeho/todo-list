import { useSetRecoilState } from "recoil";
import { ToDoEl } from "../style/ToDoStyle";
import { IToDo, toDoState } from "./atoms";

export default function ToDo({ text, category, id }: IToDo) {
    //IToDo["category"] : 이미 있는 인터페이스 내에서 특정 값만 쓸 때
    const setToDos = useSetRecoilState(toDoState);
    /*
        button onclick 함수 만들 때
        1. 각각의 인자를 받아서 쓰기
        - const onClick = (newCategory: IToDo["category"]) => {};
        - <button onClick={() => onClick("TODO")}>TODO</button>
        -> 이렇게 쓸 경우, 별도 type check 가 필요 없음. 날 믿어 typescript.

        2. button의 name값 받아서 쓰기
        -  const {
            currentTarget: { name },
        } = event;
         - <button name="TODO" onClick={onClick}>TODO</button>
         -> name값의 type을 지정해야 한다.
    */
    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const {
            currentTarget: { name },
        } = event;
        setToDos((oldToDos) => {
            //replace item in array: 해당 item의 idx를 가져와서 배열의 앞뒤를 자르고 새 아이템을 넣고 다시 붙임. slice(0, idx) + new Item + slice(idx + 1)
            const targetIdx = oldToDos.findIndex((toDo) => toDo.id === id);
            const newToDo = { text, category: name as IToDo["category"], id };
            return [
                ...oldToDos.slice(0, targetIdx),
                newToDo,
                ...oldToDos.slice(targetIdx + 1),
            ];
        });
    };
    return (
        <ToDoEl>
            <span>{text}</span>
            {category !== "TODO" && (
                <button name="TODO" onClick={onClick}>
                    TODO
                </button>
            )}
            {category !== "DOING" && (
                <button name="DOING" onClick={onClick}>
                    DOING
                </button>
            )}
            {category !== "DONE" && (
                <button name="DONE" onClick={onClick}>
                    DONE
                </button>
            )}
        </ToDoEl>
    );
}
