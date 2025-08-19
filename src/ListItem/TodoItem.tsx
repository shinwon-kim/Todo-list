import styles from "./TodoItem.module.css"
import { FaRegCircleCheck } from "react-icons/fa6";
import { IoRemoveCircleOutline } from "react-icons/io5";

interface TodoItemProps {
    text: string;
}

const TodoItem = (props:TodoItemProps) => {
    return (
        <li>
            <FaRegCircleCheck/>
            <span>{props.text}</span>
            <IoRemoveCircleOutline></IoRemoveCircleOutline>
        </li>
    )
}

export default TodoItem;