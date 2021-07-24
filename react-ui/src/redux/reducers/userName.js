import { GET_USERNAME } from '../actionTypes';

const initialState = '';

export default function userName(state = initialState, action) {
    if(action.type === GET_USERNAME) {
        // console.log("in reducer", action.payload.userName);
        return action.payload.userName
    }
    return state;
};

//--------------------
//  Immutable Objects
//--------------------

// user = {
//     name: 'john',
//     age: '29',
//     city: 'san antonio',
//     hobbies: ['hiking', 'biking', 'climbing']
// }

/* 
return {
    ...user,
    city: action.payload.user.city
}
return state;

*/