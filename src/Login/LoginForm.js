import React, {useState, useEffect} from 'react'

const LoginForm =()=>{

    const initState ={
        userName:'',
        password:''
    }
const [inputData, setInputData]=useState(initState);

    

    const inputEvent =(e)=>{
        
            const {name, value} = e.target;

            setInputData({
                ...inputData,
                [name]:value
            })
    }
    const submitEvent=(e)=>{
        e.preventDefault();
        console.log(inputData);
    }
return(
    <>

    <form onSubmit={submitEvent}>
    <div>
       User Name: <input type="text" name="userName" value={inputData.userName} onChange={inputEvent}/>
       <br/>
       <br/>
       Password: <input type='password'name="password" value={inputData.password} onChange={inputEvent}/>
       <br/>
       <br/>
       <button type="submit">Login</button>

    </div>
       
    </form>

    </>
)
}

export default LoginForm;