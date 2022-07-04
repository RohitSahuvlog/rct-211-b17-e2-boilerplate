//Create ActionCreator functions here

import axios from "axios";
import * as types from "./actionTypes";
import { LOGIN_SUCCESS } from "./actionTypes";
const loginsucess=(payload)=>({type:LOGIN_SUCCESS,payload})
 export const login=(payload)=>(dispatch)=>{
//   console.log(payload)
dispatch({type:types.LOGIN_REQUEST})
return  axios.post("https://reqres.in/api/login",payload).then((r)=>{
 return  console.log(r)}).catch((e)=>dispatch({type:types.LOGIN_FAILURE}))
}

// dispatch(loginsucess(r.data.token))