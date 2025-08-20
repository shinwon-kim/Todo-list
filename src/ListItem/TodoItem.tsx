import styles from "./TodoItem.module.css"
import { FaRegCircleCheck } from "react-icons/fa6";
import { IoRemoveCircleOutline } from "react-icons/io5";

interface TodoItemProps {
    text: string;
}

const TodoItem = (props:TodoItemProps) => {
    const isCheck = false;
    return (
        <li className={styles.container}>
            <FaRegCircleCheck className={[styles.checkIcon, `${isCheck ? styles.checkedCircleIcon : styles.unCheckedCircleIcon}`].join(" ")}/>
            <span>{props.text}</span>
            <IoRemoveCircleOutline className={styles.removeIcon}/>
        </li>
    )
}

export default TodoItem;