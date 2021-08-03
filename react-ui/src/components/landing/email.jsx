import { useState } from 'react';
import { connect } from 'react-redux';
import  Button from 'react-bootstrap/Button'
import { updateEmail } from '../../redux/actions';


// variable that exist on an object called props { destructured }
const Email = ({ updateEmail, email }) => {

    const [userEmail, setUserEmail] = useState('');

    const handleChange = e => {
        const email = e.target.value;
        setUserEmail(email);
    }

    const handleSubmit = () => {
        updateEmail(userEmail);
        setUserEmail('');
        console.log('inside email.jsx:', userEmail)
    }

    return (
        <>
        <input 
            className="email-input" 
            onChange={handleChange}
            type="email" 
            placeholder="Email" 
            value={userEmail} 
        />
        <Button
            className="mt-3"
            variant="dark"
            type="submit"
            size="sm"
            onClick={handleSubmit}
        >
            Submit
        </Button>
        </>
    )
}

// // READ
const mapStateToProps = state => ({
    user: state.email
});

// // sends data to the reducer, reducer updates store: WRITE
const mapDispatchToProps = dispatch => ({
    updateEmail: email => dispatch(updateEmail(email))
});

export default connect(mapStateToProps, mapDispatchToProps)(Email);