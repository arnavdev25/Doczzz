import { GET_LOGIN_SUCCESS, LOADING, LOGOUT } from "./action";
const initState = {
  isAuth: false,
  userData: {},
  loading: false,
};
export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuth: true,
        token: action.payload,
        userData: action.userData,
      };
    case LOGOUT:
      return {
        ...state,
        isAuth: false,
        token: "",
        userData: {},
      };
    default:
      return state;
  }
};
