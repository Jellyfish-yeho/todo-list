import { atom } from "recoil";

export interface IToDo {
    text: string;
    id: number;
    category: "TODO" | "DOING" | "DONE"; //특정한 값으로 제한
}

export const toDoState = atom<IToDo[]>({
    key: "toDo",
    default: [],
});
