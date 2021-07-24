import {
    GET_USERNAME
} from './actionTypes';
// import userName from './reducers/userName';

export const updateUserName = userName => {
    //has to return an object with a key of 'type'
    return {
        type: GET_USERNAME,
        payload: {
            userName
        }
    }
};