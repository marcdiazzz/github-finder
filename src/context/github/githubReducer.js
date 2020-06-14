//change state of certain components that need changing when something happens
//decide whats gonna happen to your state based on an actions
import{
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USER,
    GET_REPOS
} from '../types';

export default (state , action) =>{
    switch(action.type){
    case SEARCH_USERS:
        return{
            //...(spread operator) copy whats on the current state
            ...state,
            //
            users: action.payload,
            loading: false
        };
    case CLEAR_USERS:
        return {
            ...state,
            users: [],
            loading: false
          };
    case GET_USER:
        return{
            ...state,
            user: action.payload,
            loading:false
        };
    case GET_REPOS:
        return{
            ...state,
            repos: action.payload,
            loading:false
        };   
    case SET_LOADING:
        return{
            ...state,
            loading:true
        };
    default:
        return state;
    }
}
