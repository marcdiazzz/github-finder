//initital state, actions, 
//types are more on redux
import React , {useReducer} from 'react';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';
import{
    SET_ALERT,
    REMOVE_ALERT
} from '../types';

const AlertState = props => {

    const initialState = null;

    const [state, dispatch] = useReducer(AlertReducer, initialState);

    //SET_ALER
    const setAlert = (msg, type) => {
        dispatch({
          type: SET_ALERT,
          payload: { msg, type }
        });
    
        setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000);
      };

    //provider gonna take in props
    return (<AlertContext.Provider
    value={{
        alert: state,
        setAlert
    }}>
       
    {props.children}

    </AlertContext.Provider>
    );
};
export default AlertState;

