import { useState } from "react"
import { db } from "../firebase"
import { addDoc, collection } from "firebase/firestore"

export default function CreateTodo() {

    const [todoList, setTodoList] = useState({
        title: '',
        detail: ''
    })
    async function handleSubmit() {
        const docRef = await addDoc(collection(db, "todos"), todoList)
    setTodoList({
        title: '',
        detail: ''
    })
    }

    return (
        <>
        <form>
            <label >Title</label>
            <br/>
            <input type="text" onChange={e=> setTodoList({...todoList, title: e.target.value})} />
            <br></br>
            <label>Detail:</label>
            <br></br>
            <textarea value={todoList.detail} onChange={e=> setTodoList({...todoList, detail: e.target.value})}></textarea>
        </form>
        <button onClick={handleSubmit}>Add Todo</button>
        <p>{JSON.stringify(todoList)}</p>
        </>
    )
}