import { useForm } from "react-hook-form";
import {
    atom,
    useRecoilState,
    useRecoilValue,
    useSetRecoilState,
} from "recoil";

interface IForm {
    toDo: string;
}
interface IToDo {
    text: string;
    id: number;
    category: "TODO" | "DOING" | "DONE"; //특정한 값으로 제한
}
const toDoState = atom<IToDo[]>({
    key: "toDo",
    default: [],
});

export default function ToDoList() {
    const [toDos, setToDos] = useRecoilState(toDoState); //setState와 유사.
    // const value = useRecoilValue(toDoState); //get value from atom
    // const modFn = useSetRecoilState(toDoState) //set atom function
    const { register, handleSubmit, setValue } = useForm<IForm>();
    const handleValid = ({ toDo }: IForm) => {
        console.log("add a todo: ", toDo);
        setToDos((oldToDos) => [
            { text: toDo, category: "TODO", id: Date.now() },
            ...oldToDos,
        ]);
        setValue("toDo", "");
    };
    console.log(toDos);
    return (
        <div>
            <h1>TO DO LIST</h1>
            <hr />
            <form onSubmit={handleSubmit(handleValid)}>
                <input
                    {...register("toDo", {
                        required: "Write a To Do",
                    })}
                    placeholder="Write a todo!"
                />
                <button>add</button>
            </form>
            <ul>
                {toDos.map(({ id, category, text }) => (
                    <li key={id}>
                        <span>[{category}]</span>
                        <span>{text}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
