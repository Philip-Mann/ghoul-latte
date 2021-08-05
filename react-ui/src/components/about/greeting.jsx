import { connect } from 'react-redux';

const Greeting = ({ userName }) => {
     return <h1>Meow {userName} you pathetic human.</h1>
}

// coming from the store into this component: READ
const mapStateToProps = state => ({
    userName: state.userName
});

// function(()()) is a closure. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
export default connect(mapStateToProps)(Greeting);