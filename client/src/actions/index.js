import {AUTH_SIGNUP,AUTH_ERROR} from './types';
import axios from 'axios';
export const signup =(formProps,callback)=> async dispatch =>{
try{
    const response = await axios.post('http://localhost:4000/signup',formProps)
    dispatch({type:AUTH_SIGNUP,payload:response.data.token})
    localStorage.setItem('token',response.data.token);
    callback();
}
catch(e){
    dispatch({type:AUTH_ERROR,payload:'Email already in use'})
}

}
export const signout=()=>{
    localStorage.removeItem('token');
    return{
        type:AUTH_SIGNUP,
        payload:''
    }
}
export const signin =(formProps,callback)=> async dispatch =>{
    try{
        const response = await axios.post('http://localhost:4000/signin',formProps)
        dispatch({type:AUTH_SIGNUP,payload:response.data.token})
        localStorage.setItem('token',response.data.token);
        callback();
    }
    catch(e){
        dispatch({type:AUTH_ERROR,payload:"Invalid login credentials"})
    }
    
    }