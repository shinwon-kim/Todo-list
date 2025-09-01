import { TodoType } from "../App";
import styles from "./TodoList.module.css";
import TodoItem from "../ListItem/TodoItem";

interface TodoListProps {
   todos: TodoType[]; 
   onToggleClick: (id: number) => void;
   onRemoveClick: (id: number) => void;
}

const TodoList = (props: TodoListProps) => {

    return(
        <section>
            <ol className={styles.olContainer}>
                {
                    props.todos.map((todo) => {
                        return <TodoItem 
                        id={todo.id}
                        key={`${todo.id}`} 
                        text={todo.text} 
                        isChecked={todo.isChecked}
                        onRemoveClick={props.onRemoveClick}
                        onToggleClick={props.onToggleClick}
                        />
                    })
                }
            </ol>
        </section>
    )
}

export default TodoList;