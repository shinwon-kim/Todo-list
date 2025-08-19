import styles from "./TodoList.module.css";
import TodoItem from "../ListItem/TodoItem"

const TodoList = () => {
    const arr = ["React", "Typescript", "Javascript", "CSS", "HTML"]

    return(
        <section>
            <ol className={styles.olContainer}>
                {
                    arr.map((item, index) => {
                        return <TodoItem key={`${item}_${index}`} text={item}/>
                    })
                }
            </ol>
        </section>
    )
}

export default TodoList;