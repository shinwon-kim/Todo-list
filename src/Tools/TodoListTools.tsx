import styles from "./TodoListTools.module.css";

const TodoListTools = () => {
    return (
        <section className={styles.container}>
            <button>전체 완료</button>
            <button>전체 삭제</button>
        </section>
    )
}

export default TodoListTools;