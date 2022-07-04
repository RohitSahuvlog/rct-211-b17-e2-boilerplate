//Create ActionCreator functions here
import axios from "axios"
import { GET_SHOES_DATA_FAILURE, GET_SHOES_DATA_REQUEST, GET_SHOES_DATA_SUCCESS } from "./actionTypes"


export const getshoesdatarequest=()=>({
    type:GET_SHOES_DATA_REQUEST
})
export const getshoesdatasuccess=(payload)=>({
    type:GET_SHOES_DATA_SUCCESS,
    payload
})
export const getshoesdatafailure=()=>({
    type:GET_SHOES_DATA_FAILURE
})


export const Getshoes =(params)=>(dispatch)=>{
    dispatch(getshoesdatarequest())
    axios.get("http://localhost:8080/shoes",params).then((r)=>{dispatch(getshoesdatasuccess(r.data))}).catch((error)=>{
        dispatch(getshoesdatafailure())
    })
}
// 