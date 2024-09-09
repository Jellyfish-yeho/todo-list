import { useRecoilValue } from "recoil";
import { toDoState } from "./atoms";
import { CreateToDo } from "./CreateToDo";
import ToDo from "./ToDo";
import { ContainerEl, HeaderEl, ToDoListEl } from "../style/ToDoStyle";

export default function ToDoList() {
    const toDos = useRecoilValue(toDoState); //setState와 유사.

    console.log(toDos);

    return (
        <ContainerEl>
            <HeaderEl>
                <h1>TO DO LIST</h1>
            </HeaderEl>
            <CreateToDo />
            <ToDoListEl>
                {toDos.map((toDo) => (
                    <ToDo
                        key={toDo.id}
                        {...toDo}
                        // id={toDo.id}
                        // text={toDo.text}
                        // category={toDo.category}
                    />
                ))}
            </ToDoListEl>
        </ContainerEl>
    );
}
