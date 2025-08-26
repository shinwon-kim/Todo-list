import { TodoType } from "../App";
import styles from "./TodoList.module.css";
import TodoItem from "../ListItem/TodoItem";

interface TodoListProps {
   todos: TodoType[]; 
}

const TodoList = (props: TodoListProps) => {

    return(
        <section>
            <ol className={styles.olContainer}>
                {
                    props.todos.map((todo) => {
                        return <TodoItem key={`${todo.id}`} text={todo.text} isChecked={todo.isChecked}/>
                    })
                }
            </ol>
        </section>
    )
}

export default TodoList;