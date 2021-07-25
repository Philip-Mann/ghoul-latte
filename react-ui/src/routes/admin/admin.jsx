import { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import PropTypes from 'prop-types';


/* created an async function that will fetch method using POST option*/
async function loginAdmin(credentials) {
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(data => data.json())
}




export default function Admin({ setAdminToken }) {

    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const toggleShowPassword = () => {
        setShowPassword(showPassword ? false : true);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const formSubmit = async e => {
        e.preventDefault();
        const adminToken = await loginAdmin({
            email,
            password
        });
        setAdminToken(adminToken)
    }
    
    
    Admin.propTypes = {
        setAdminToken: PropTypes.func.isRequired
    };

    
    return (
        <div className="admin-login-container m-3">
            <Form onSubmit={formSubmit} >
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={handleEmail} type="email" placeholder="Enter email" value={email} suggested="current-email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={handlePassword} type={showPassword ? "text" : "password"} placeholder="Password" value={password} suggested="current-password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="showPassword">
                    <Form.Check onClick={toggleShowPassword} type="checkbox" label="Show Password" />
                </Form.Group>
                <Button variant="dark" type="submit">
                    Login
                </Button>
            </Form>
        </div>
    )
}


/* TODO: Scrap this branch and redo login and store 
components, capture data from it in redux and display
 on seperate component called capture*/