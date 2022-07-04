import { LOGIN_FAILURE ,LOGIN_REQUEST,LOGIN_SUCCESS} from "./actionTypes";

const initialState = {
  data: {
    isAuth: false,
    token: "",
  },
  isLoading: false,
  isError: false,
};

export const Authreducer = (state = initialState,{type,payload}) => {

  switch(type){
    case LOGIN_REQUEST : 
    return{
        ...state,
        data:{
          isAuth:false,
          token: "",
        },
     
        isLoading:true,
        isError:false
    }
    case LOGIN_SUCCESS : 
    return{
        ...state,
       
        data:{
          isAuth:true,
          token:payload,
        },
       
        isLoading:false,
        isError:false
    }
    case LOGIN_FAILURE : 
    return{
        ...state,
        ...state,
        data:{
          isAuth:false,
          token: "",
        },
        isLoading:false,
        isError:true
    }
default :
  return state;
}
}
