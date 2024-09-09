import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { toDoState } from "./atoms";
import { ButtonEl, InputContainerEl, InputEl } from "../style/ToDoStyle";

interface IForm {
    toDo: string;
}

export function CreateToDo() {
    const setToDos = useSetRecoilState(toDoState);
    const { register, handleSubmit, setValue } = useForm<IForm>();
    const handleValid = ({ toDo }: IForm) => {
        console.log("add a todo: ", toDo);
        setToDos((oldToDos) => [
            { text: toDo, category: "TODO", id: Date.now() },
            ...oldToDos,
        ]);
        setValue("toDo", "");
    };
    return (
        <form onSubmit={handleSubmit(handleValid)}>
            <InputContainerEl>
                <InputEl
                    {...register("toDo", {
                        required: "Write a To Do",
                    })}
                    placeholder="Write a todo!"
                />
                <ButtonEl>ADD</ButtonEl>
            </InputContainerEl>
        </form>
    );
}
