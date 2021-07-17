import React, {useState,useEffect} from 'react'
import firebase from 'firebase'


const Todos =(props)=>{


const [updateList, setUpdateList] = useState();

    useEffect(()=>{

        const getTodos = firebase.database().ref('Todos');
        getTodos.on('value', (snapshoot)=>{
            const todoList =snapshoot.val();

            const todoLists=[]
            for (let id in todoList){
                todoLists.push(
                    {id, ...todoList[id]}
                )
            }

setUpdateList(todoLists)
        })
        
    }, [])
    
    const deleteTodo = (e)=>{
            firebase.database().ref('Todos').child(e).remove();
    }
    
    return(
    <>
    
    {
        updateList ? 

     updateList.map((elm, index)=>{
        
    return (
        <ul key={index}>
    <li ><h5> {elm.todo} </h5>
    <button onClick={()=>deleteTodo(elm.id)}>Delete</button>
    <button onClick={()=>props.edit(elm)}>Edit</button>
    </li>
</ul>
    )
        }):''
        
}
    </>
)

}

export default Todos;