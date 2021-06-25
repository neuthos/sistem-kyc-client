import Axios from "axios"
const baseUrl = "https://sistem-kyc.herokuapp.com"


const setLogin = (payload) => {
  return { type: "SET_LOGIN", payload };
}

const setRegister = (payload) => {
  return { type: "SET_REGISTER", payload };
};

const setLogout = (payload) => {
  return { type: "SET_LOGOUT", payload };
};

const setError = (payload) => {
  return { type: "SET_ERROR", payload };
};

const setPage = (payload) => {
  return { type: "SET_PAGE", payload}
}


const Register = (payload) => {
  return async (dispatch) => {
    try {
      const doRegister = await Axios({
        method: "POST",
        url: baseUrl + "/register",
        data: payload
      })
  
      return true
    } catch (err) {
      console.log(err.response)
      dispatch(setError(err.response.data))
    }
  }
}

const Login = (payload) => {
  return async (dispatch) => {
    try {
      const res = await Axios({
        method: "POST",
        url: baseUrl + "/login",
        data: payload
      })

      if(res.data.access_token) {
        localStorage.setItem("access_token", res.data.access_token) 
        localStorage.setItem("isAdmin", res.data.isAdmin) 
      }

      return dispatch(setLogin({
        admin: res.data.isAdmin,
        user: !res.data.isAdmin
      }))
    } catch (err) {
      dispatch(setError(err.response.data))
    }
  }
}


export default {
  setLogin,
  setRegister,
  setError,
  Register,
  Login,
  setPage,
  setLogout
}
