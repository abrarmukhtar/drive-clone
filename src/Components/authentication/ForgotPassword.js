import React, {useRef, useState, useContext} from 'react';
import {Form, Button, Card, Alert} from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom';
import CenteredContainer from './CenteredContainer'

export default  function ForgotPassword(){
    
    const emailRef = useRef();
    
    const [error, setError]=useState();
    const [loading, setLoading]=useState(false);
    const {resetPassword } = useAuth();
    const history = useHistory();
    const [Message, setMessage] = useState('');
    
 async function handleSubmit(e) {
e.preventDefault();



try{
    setMessage('');
    setError('')
    setLoading(true)

    await  resetPassword(emailRef.current.value)
    setMessage('Check your inbox for further instructions');
    
}catch{
    
setError('Failed to reset password')
}

setLoading(false)


}
    return (
        <CenteredContainer>

        <Card>
            <Card.Body>
                <h2 className='text-center mb-4'>Reset Password</h2>
                {error && <Alert variant="danger"> {error}</Alert>}
                {Message && <Alert variant='success'>{Message}</Alert>}

                <Form onSubmit={handleSubmit}>
                    <Form.Group id='email'>
                    <Form.Label>
                        Email
                    </Form.Label>
                    <Form.Control type='email' ref={emailRef}></Form.Control>
                    </Form.Group>
                    <br/>
                    <Button disabled={loading} className='w-100' type='submit'>Reset Password</Button>
                </Form>
                <div className='w-100 text-center mt-3' >
                    <Link to='/login'>Log In</Link>
                </div>
            </Card.Body>
        </Card>
          <div className='w-100 text-center mt-2 '>
          Create an account? {<Link to='/signup'> Signup</Link>}
          </div>
          
          </CenteredContainer>
    )
}
