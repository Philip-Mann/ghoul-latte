import { useState } from 'react';
import { connect } from 'react-redux';
import  Button from 'react-bootstrap/Button'
import { updateUserName } from '../../redux/actions';


// variable that exist on an object called props { destructured }
const UserNameForm = ({ updateUserName, userName }) => {

    const [name, setName] = useState('');

    const handleChange = evt => {
        const userName = evt.target.value;
        setName(userName);
    }

    const handleSubmit = () => {
        updateUserName(name);
        setName('');
    }

    return (
        <div className="form-container d-flex">
            <div className="form-card">
                <input 
                    className="email-input" 
                    onChange={handleChange} 
                    type="email" 
                    placeholder="Email" 
                    value={name} 
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
            </div>
        </div>
    )
}

// READ
const mapStateToProps = state => ({
    userName: state.userName
});

// sending to the store: WRITE
const mapDispatchToProps = dispatch => ({
    updateUserName: userName => dispatch(updateUserName(userName))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserNameForm);