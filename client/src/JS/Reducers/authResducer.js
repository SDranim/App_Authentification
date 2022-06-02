import { GET_CURRENT, LOGIN, LOGOUT, REGISTER } from "../actionTypes/userAction"

const initialState = {
    auth:false,
    load:true,
    user:null
}

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case REGISTER:
    localStorage.setItem('token', payload.token )
    return { ...state, auth:true, load:false, user: payload.newUser}
    case LOGIN:
        localStorage.setItem('token', payload.token )
        return { ...state, auth:true, load:false, user: payload.foundUser}
     case GET_CURRENT:
        return { ...state, auth:true, load:false, user: payload.user}
    case LOGOUT :
      localStorage.removeItem('token')
      return {...state, auth:false, load:true, user:null}

  default:
    return state
  }
}


export default authReducer