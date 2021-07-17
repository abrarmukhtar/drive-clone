import React, {useRef, useState, useContext} from 'react';
import {Form, Button, Card, Alert} from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom';
import CenteredContainer from './CenteredContainer'
export default  function Signup(){
    
    const emailRef = useRef();
    const passwordRef =useRef();
    const passwordConfirmRef = useRef();
    const [error, setError]=useState();
    const [loading, setLoading]=useState(false);
    const { signup } = useAuth();
    const history = useHistory();
 async function handleSubmit(e) {
e.preventDefault();


if(passwordRef.current.value !== passwordConfirmRef.current.value)
{
        return setError('Password do not match')
}
try{
    setError('')
    setLoading(true)
    await console.log( signup(emailRef.current.value, passwordRef.current.value));
    history.push('/')
}catch{
    
setError('Failed to create an account')
}
setLoading(false)


}
    return (
        <CenteredContainer>
        <Card>
            <Card.Body>
                <h1 className='text-center mb-4'>Sign Up</h1>
                {error && <Alert variant="danger"> {error}</Alert>}
                
                <Form onSubmit={handleSubmit}>
                    <Form.Group id='email'>
                    <Form.Label>
                        Email
                    </Form.Label>
                    <Form.Control type='email' ref={emailRef} required></Form.Control>
                    </Form.Group>
                    <Form.Group id='password'>
                    <Form.Label>
                    Password
                    </Form.Label>
                    <Form.Control type='password' ref={passwordRef} required></Form.Control>
                    </Form.Group>
                    <Form.Group id='confirm-password'>
                    <Form.Label>
                    Password Confirmation
                    </Form.Label>
                    <Form.Control type='password' ref={passwordConfirmRef} required></Form.Control>
                    </Form.Group>
                    <br/>
                    <Button disabled={loading} className='w-100' type='submit'>Sign Up</Button>
                </Form>
            </Card.Body>
        </Card>
          <div className='w-100 text-center mt-2 '>
          Already have an account? {<Link to='/login'> Log In</Link>}
          </div>
          </CenteredContainer>
    )
}
