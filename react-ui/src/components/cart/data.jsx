import { connect } from 'react-redux';


const Data = ({ email }) => {

    console.log('data.jsx', email)
    
    return (
        <>
        <h1>Data</h1>
        <p>email: {email}</p>
        </>
    )
}

//coming from the store into my componenet
const mapStateToProps = state => ({
    email: state.email
});

export default connect(mapStateToProps)(Data);