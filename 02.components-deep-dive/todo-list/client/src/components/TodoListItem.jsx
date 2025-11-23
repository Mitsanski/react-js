import { url } from "../constants";

export default function TodoListItem({ todo, onUpdate }) {

    const changeStatusHandler = async () => {
        const newStatus = !todo.isCompleted;
        try {
            const request = await fetch(`${url}/${todo._id}`, {
                method: 'PUT',
                body: JSON.stringify({ text: todo.text, isCompleted: newStatus })
            });

            if (!request.ok) {
                throw new Error(`API error: ${request.status}`);
            }

            const updatedTodo = await request.json();

            if (onUpdate) {
                onUpdate(updatedTodo)
            }

        } catch (err) {
            console.log(err)
        }
    }
    return (
        <>
            <tr className={`todo ${todo.isCompleted ? "todo is-completed" : "todo"}`}>
                <td>{todo.text}</td>
                <td>{todo.isCompleted ? 'Complete' : 'Incomplete'}</td>
                <td className="todo-action">
                    <button className="btn todo-btn" onClick={changeStatusHandler}>Change status</button>
                </td>
            </tr>
        </>
    )
}