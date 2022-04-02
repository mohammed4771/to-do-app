import { useState } from 'react';
import Plus from './assets/plus.svg'
const AddNewTask = () => {
    const [title, setTitle] = useState('')

    const handleSubmit = (e) => {

        const task = { title }
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(task)
        }).then(() => {
            console.log("new Task Added")
            setTitle('')
        })
    }

    return (
        <form onSubmit={handleSubmit} className="newTodoInput">
            <input 
                type="text"
                placeholder="Enter a Task"
                autoComplete="off"
                value={title}
                onChange={(e) => setTitle(e.target.value)}               
            />
            <button><img src={Plus} alt="Add Task"/></button>
        </form>
    );
}
 
export default AddNewTask;