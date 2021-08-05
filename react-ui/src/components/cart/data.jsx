import { connect } from 'react-redux';

const Data = ({ email }) => {
    
    return (
        <>
        <p>{email}</p>
        </>
    )
}

//coming from the store into my componenet
const mapStateToProps = state => ({
    email: state.email
});

export default connect(mapStateToProps)(Data);