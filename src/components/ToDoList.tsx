import { useForm } from "react-hook-form";

interface IForm {
    toDo: string;
}

export default function ToDoList() {
    const { register, handleSubmit, setValue } = useForm<IForm>();
    const handleValid = (data: IForm) => {
        console.log("add a todo: ", data.toDo);
        setValue("toDo", "");
    };
    return (
        <div>
            <form onSubmit={handleSubmit(handleValid)}>
                <input
                    {...register("toDo", {
                        required: "Write a To Do",
                    })}
                    placeholder="Write a todo!"
                />
                <button>add</button>
            </form>
        </div>
    );
}
