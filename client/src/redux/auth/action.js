import axios from "axios";
export const GET_LOGIN_SUCCESS = "GET_LOGIN_SUCCESS";
export const LOGOUT = "LOGOUT";
export const LOADING = "LOADING";
export const userLoginSuccess = (payload) => ({
  type: GET_LOGIN_SUCCESS,
  payload: payload.token,
  userData: payload.user,
});
export const loading = () => ({
  type: LOADING,
});
export const logoutUser = () => ({
  type: LOGOUT,
});
export const getLoginToken = (payload) => (dispatch) => {
  dispatch(loading());
  axios
    .post("https://doczzz.herokuapp.com/user/login", payload)
    .then((res) => {
      if (!res.data.error) {
        dispatch(userLoginSuccess(res.data));
      }
    })
    .catch((err) => {
      alert(err.response.data.error);
    });
};
export const registerUser = (payload) => (dispatch) => {
  dispatch(loading());
  axios
    .post("https://doczzz.herokuapp.com/user/signup", payload)
    .then((res) => {
      alert("Succesfilly Registered");
    })
    .catch((err) => {
      alert(err.response.data.error);
    });
};
