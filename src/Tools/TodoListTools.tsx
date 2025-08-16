import styles from "./TodoListTools.module.css";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { FaTrash } from "react-icons/fa6";

const TodoListTools = () => {
    return (
        <section className={styles.container}>
            <button className={styles.button}>
                {IoCheckmarkDoneCircleOutline({})}전체 완료</button>
            <button className={styles.button}>
                {FaTrash({}) }전체 삭제</button>
                {/* <FaTrash/>전체 삭제</button> */}
        </section>
    )
}

export default TodoListTools;