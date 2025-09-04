import styles from "./TodoListTools.module.css";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { FaTrash } from "react-icons/fa6";

interface TodoListToolsProps {
    onToggleAllClick: () => void
    onRemvoeAllClick: () => void
}

const TodoListTools = (props: TodoListToolsProps) => {
    const handleToggleAllClick = () => {
        props.onToggleAllClick();
    }

    const handleRemoveAllClick = () => {
        props.onRemvoeAllClick();
    }

    return (
        <section className={styles.container}>
            <button className={styles.button} onClick={handleToggleAllClick}>
                <IoCheckmarkDoneCircleOutline className={styles.checkAllIcon}/>전체완료</button>
            <button className={[styles.button, styles.removeAllButton].join(' ')} onClick={handleRemoveAllClick}>
                <FaTrash className={styles.removeAllIcon}/>전체삭제</button>
        </section>
    )
}

export default TodoListTools;