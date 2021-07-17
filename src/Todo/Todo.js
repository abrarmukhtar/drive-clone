import React, {useState} from 'react';
import firebase from 'firebase';
import Todos from './Todos'
const Todo =()=>{
const initState = {
    todo:''
};
const [Todo, setTodo ] =useState(initState);
    
const [currentId, setCurrentId]=useState('');

    const changeValue =(e)=>{
        // console.log(e.target.name);    
        const {name, value} = e.target;
            
        setTodo(
             {
                 ...Todo,
                [name]:value
            }
        )

    }


    const addTodo =()=>{
        
        const todos = firebase.database().ref('Todos').push(
            Todo
        )
        setTodo(initState);
        document.getElementById('todo').focus();
    }

    const editTodo =(data)=>{
        // console.log(data);
        setCurrentId(data.id);
        // document.getElementsByName('todo').innerText = data.todo;
        setTodo(data)
        document.getElementById('todo').focus();
        // firebase.database().ref('Todos').child(data.id).update({
        //     todo: 'updated record'
        // })
        
    }

    const updateTodo =()=>{
        firebase.database().ref('Todos').child(currentId).update({
            todo: Todo.todo
        })
        setCurrentId('');
        setTodo(initState)
        document.getElementById('todo').focus();
    }
    return(
        <>

            <input type='text' id="todo" name="todo" value ={Todo.todo} onChange={changeValue} />
            <button onClick={()=> currentId===''? addTodo(): updateTodo()}> {currentId===''? 'Add Todo': 'Update Todo'}</button>
            <br/>
            <br/>
            <h1>List of Todos</h1>
            <Todos edit={editTodo}/>
        </>
    )
}

export default Todo;