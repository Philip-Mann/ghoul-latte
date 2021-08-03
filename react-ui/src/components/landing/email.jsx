import { useState } from 'react';
import  Button from 'react-bootstrap/Button'
// Every componenent that is tied to the store needs this import
// useSelector is to read data, useDispatch is to write data
// This is similar to what I showed to you with mapStateToProps and mapDispatchToProps
import { useSelector, useDispatch } from 'react-redux'
// If you are updating the store, you also need to import your slice
// I don't like that name but it's what the docs call it
// It is basically a reducer tied to a specific slice of the store but it also has functions which used to be in a separate file
// A reducer is just a function but it's special in that it's sole purpose is to update the store
import { updateEmail } from '../../redux/slice/email';


const UserNameForm = () => {
  const email = useSelector((state) => state.email)
  const dispatch = useDispatch();

    const [name, setName] = useState('');

    const handleChange = evt => {
        const userName = evt.target.value;
        setName(userName);
    }

    const handleSubmit = () => {
        dispatch(updateEmail(name));
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

export default UserNameForm;