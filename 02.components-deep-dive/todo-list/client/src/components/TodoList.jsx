import { useEffect, useState } from "react";
import { url } from "../constants";
import Loading from "./Loading";
import TodoListItem from "./TodoListItem";

export default function TodoList() {
    const [isLoading, setIsLoading] = useState(true);
    const [todos, setTodos] = useState([]);

    const handleTodoUpdate = (updatedTodo) => {
        // This function forces the component to re-render by changing state.
        setTodos(prevTodos => 
            // Map the previous state to create a new array.
            prevTodos.map(todo => 
                // If the IDs match, replace the old item with the new, updated item.
                todo._id === updatedTodo._id ? updatedTodo : todo
            )
        );
    };

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            try {
                const res = await fetch(url);
                const data = await res.json();
                setTodos(Object.values(data));
                setIsLoading(prev => !prev)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();

    }, [])

    return (
        <main className="main">
            <section className="todo-list-container">
                <h1>Todo List</h1>

                <div className="add-btn-container">
                    <button className="btn">+ Add new Todo</button>
                </div>

                <div className="table-wrapper">

                    {isLoading && <Loading />}
                    {!isLoading && todos.length === 0 && <p>No tasks found. Get to work!</p>}


                    <table className="table">
                        <thead>
                            <tr>
                                <th className="table-header-task">Task</th>
                                <th className="table-header-status">Status</th>
                                <th className="table-header-action">Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {!isLoading && todos.map(todo =>
                                <TodoListItem key={todo._id}
                                    todo={todo}
                                    onUpdate={handleTodoUpdate} />)}

                        </tbody>
                    </table>
                </div>
            </section>
        </main>
    )
}