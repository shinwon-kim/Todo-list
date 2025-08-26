import styles from "./TodoItem.module.css"
import { FaRegCircleCheck } from "react-icons/fa6";
import { IoRemoveCircleOutline } from "react-icons/io5";

interface TodoItemProps {
    text: string;
    isChecked: boolean;
}

const TodoItem = (props:TodoItemProps) => {
    return (
        <li className={styles.container}>
            <FaRegCircleCheck className={[styles.checkIcon, `${props.isChecked ? styles.checkedCircleIcon : styles.unCheckedCircleIcon}`].join(" ")}/>
            <span>{props.text}</span>
            <IoRemoveCircleOutline className={styles.removeIcon}/>
        </li>
    )
}

export default TodoItem;