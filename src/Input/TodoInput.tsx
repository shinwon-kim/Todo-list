import { RiChatNewLine } from "react-icons/ri";

const TodoInput = () => {
    return(
        <div>
            <form>
                <input></input>
            </form>
            <button>
                {RiChatNewLine({})}
            </button>
        </div>
    )
}

export default TodoInput;