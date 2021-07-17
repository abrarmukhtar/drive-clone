import React, {useRef, useState, useContext} from 'react';
import {Form, Button, Card, Alert} from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom';
import CenteredContainer from './CenteredContainer'
export default  function Login(){
    
    const emailRef = useRef();
    const passwordRef =useRef();
    const [error, setError]=useState();
    const [loading, setLoading]=useState(false);
    const {logout, login, currentUser } = useAuth();
    const history = useHistory();
    
    
 async function handleSubmit(e) {
e.preventDefault();



try{
    setError('')
    setLoading(true)

    await  login(emailRef.current.value, passwordRef.current.value)

    history.push('/')
}catch(e){
    // console.log();
setError(e.message)
}

setLoading(false)


}
    return (
        <CenteredContainer>
        <Card>
            <Card.Body>
                <h1 className='text-center mb-4'>Log In</h1>
                {error && <Alert variant="danger"> {error}</Alert>}
                

                <Form onSubmit={handleSubmit}>
                    <Form.Group id='email'>
                    <Form.Label>
                        Email
                    </Form.Label>
                    <Form.Control type='email' ref={emailRef}></Form.Control>
                    </Form.Group>
                    <Form.Group id='password'>
                    <Form.Label>
                    Password
                    </Form.Label>
                    <Form.Control type='password' ref={passwordRef}></Form.Control>
                    </Form.Group>
                    
                    <br/>
                    <Button disabled={loading} className='w-100' type='submit'>Log In</Button>
                </Form>
                <div className='w-100 text-center mt-3' >
                    <Link to='/forgot-password'>Forgot Password</Link>
                </div>
            </Card.Body>
        </Card>
          <div className='w-100 text-center mt-2 '>
          Create an account? {<Link to='/signup'> Signup</Link>}
          </div>
          </CenteredContainer>
    )
}
