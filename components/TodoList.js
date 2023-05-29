import { db } from "@/firebase";
import { collection, onSnapshot } from "firebase/firestore";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function TodoList() {
const [todos, setTodos] = useState([]);
    useEffect(()=>{
        const unsubscribe = onSnapshot(collection(db, "todos"), (snapshot) => {
            setTodos(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id })));
        })

        return unsubscribe
    },[])

    return (
            <div>
                <h1>Todos</h1>
                <ul className="todoList">
                    {todos.map((todo) =>{
return(
    <Link key={todo.id} href={"/" + todo.id}>
    <li  className="listItem">{todo.title} </li>
    </Link>
    )
                        
                    })
                    }
                   
                </ul>
            </div>
        )
}