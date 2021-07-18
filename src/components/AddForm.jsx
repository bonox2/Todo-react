import { useState } from "react";




export default function AddForm() {
    const [todoTitle, setTodoTitle] = useState()
    const [todoBody, setTodoBody] = useState()
    function  createTodo(event) {
        event.preventDefault()
            const newTodo = {
            title: todoTitle,
            body: todoBody,
            done: false, 
            createAt:Date.now(),
            updatedAt:null
        }
        console.log(newTodo)
    }
    return
        <form> onSubmit={createTodo} className="add-form"
        <h2> Add new todo</h2>
            <input name="title" type="text" placeholder="Todo title" value={todoTitle}  onCHange={(e) => setTodoTitle()} />
            <textarea name="body" placeholder="Todo body" value={todoBody} onCHange={(e) => setTodoBody()} ></textarea>
            <button type="submit"> Add tofo</button>
        </form>
    
}