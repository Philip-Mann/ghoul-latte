import { useState } from 'react';
import { connect } from 'react-redux';
import  Button from 'react-bootstrap/Button'
import { updateUserName } from '../redux/actions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
const eye = <FontAwesomeIcon icon={faEye} />;



// variable that exist on an object called props { destructured }
const UserNameForm = ({ updateUserName, userName }) => {

    const [name, setName] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = evt => {
        const userName = evt.target.value;
        setName(userName);
    }

    const handleSubmit = () => {
        updateUserName(name);
        setName('');
    }

    const toggleShowPassword = () => {
        setShowPassword(showPassword ? false : true);
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
                <div className="password-container">
                    <input 
                        className="password-input"
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                    />
                    <i onClick={toggleShowPassword} >{eye}</i>
                </div>
                <Button 
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
