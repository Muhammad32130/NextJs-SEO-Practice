import {getDoc, doc} from "firebase/firestore"
import { db } from "@/firebase";
export async function getServerSideProps(context){

    const id = context.query.id;
    const docSnap = await getDoc(doc(db, "todos", id));
    const data = docSnap.data();

    return {
        props: {
            todo:{
                title: data.title,
                detail: data.detail
            }
        }
    }
}


export default function TodoID({todo}){
    return(<>
        <h1>Todo title:{todo?.title}</h1>
        <h1>Detail:{todo?.detail}</h1>
    </>
    )
}