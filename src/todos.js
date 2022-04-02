import { useEffect, useState } from 'react'
import Check from './assets/check.svg'
import Delete from './assets/trash-can.svg'

const Todos = () => {
    const [todos, setTodos] = useState(null)
    

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json();
            }).then(todos => {
                setTodos(todos);
            })
    }, [])

    const handleDelete = (id) => {
        fetch("http://localhost:8000/blogs/"+ id, {
            method: "DELETE"
        }).then(() => {
            window.location.reload();
        })
    }

    return (
        <div className="todoList">
            {todos && todos.map(todo => ( 
                <div className="todos" key={todo.id}>
                    <div className="task">
                        <h1>{todo.title}</h1>
                        <span>
                            <button className="checkBtn"><img src={Check} alt="" /></button>
                            <button className="deleteBtn" onClick={() => handleDelete(todo.id)}><img src={Delete} alt="" /></button>
                        </span>
                    </div>

                </div>
            ))}
        </div>
    );
}
 
export default Todos;