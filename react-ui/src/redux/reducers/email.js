/* eslint-disable eqeqeq */
import { GET_EMAIL } from '../actionTypes';

const initialState = '';

export default function email(state=initialState, action) {
    if (action.type == GET_EMAIL) {
        return action.payload.email;
    }
    return state;
};


// 03:16:13 in Matts Redux Video
















































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