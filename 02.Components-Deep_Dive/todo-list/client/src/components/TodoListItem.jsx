import styles from './TodoListItem.module.css'

export default function TodoListItem({
    _id,
    text,
    isCompleted,
    onStatusChange
}) {

    const todoStyles = [styles['todo']]
    if (isCompleted) {
        todoStyles.push(styles['is-completed'])
    }
    return (
        <>

            {/* <!-- Todo item --> */}
            <tr className={todoStyles.join(' ')}>
                <td>{text}</td>
                <td>{isCompleted ? 'Completed' : 'Incomplete'}</td>
                <td className="todo-action">
                    <button
                        onClick={() => onStatusChange(_id)}
                        className="btn todo-btn"
                    >Change status</button>
                </td>
            </tr>
        </>
    )
}