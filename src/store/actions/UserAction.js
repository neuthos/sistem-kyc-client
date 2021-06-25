import Axios from "axios";
const baseUrl = "https://sistem-kyc.herokuapp.com"

const setError = (payload) => {
  return { type: "SET_ERROR", payload };
};

const setMessage = (payload) => {
  return { type: "SET_MESSAGE", payload }
}

const setUser = (payload) => {
  return { type: "SET_USER", payload }
}




const Validation = (payload) => {
  return async (dispatch) => {
    try {
      const doValidation = await Axios({
        method: "POST",
        url: baseUrl + "/kyc-validation",
        data: payload.data,
        headers: {
          access_token: payload.access_token
        }
      })

      dispatch(setMessage({ message: "Verify success" }))
      return true
    } catch (err) {
      dispatch(setError(err.response.data))
    }
  }
}

const getUserData = () => {
  return async (dispatch) => {
    try {
      const user = await Axios({
        method: "GET",
        headers: {
          access_token: localStorage.access_token
        },
        url: baseUrl + `/user`
      })

      dispatch(setUser(user.data.user))

    } catch (err) {
      dispatch(setError(err.response.data))
    }
  }
}


export default {
  setError,
  setMessage,
  Validation,
  getUserData
}