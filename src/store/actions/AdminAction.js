import Axios from "axios";
const baseUrl = "https://sistem-kyc.herokuapp.com"

const setError = (payload) => {
  return { type: "SET_ERROR", payload };
};

const setMessage = (payload) => {
  return { type: "SET_MESSAGE", payload }
}

const setUsers = (payload) => {
  return { type: "SET_USERS", payload}
}

const setUser = (payload) => {
  return { type: "SET_USER", payload }
}

const userIdCardImages = (payload) => {
  return { type: "SET_userIdCardImages", payload}
}

const userPhotosImages = (payload) => {
  return { type: "SET_userPhotosImages", payload}
}

const getUsers = (payload) => {
  return async (dispatch) => {
    try {
    
      const users = await Axios({
        method: "GET",
        url: baseUrl + "/users",
        headers: {
          access_token: payload.access_token
        }
      })

      dispatch(setUsers(users.data))

    } catch (err) {
      console.log(err)
      dispatch(setError(err.response.data))
    }
  }
}

const verifyUser = (payload) => {
  return async (dispatch) => {
    try {
      const doUpdate = await Axios({
        method: "PUT",
        url: baseUrl + `/user/${payload.userId}`,
        headers: {
          access_token: payload.access_token
        },
      })

      dispatch(setMessage({ message: "Verify success" }))
      return true
    } catch (err) {
      dispatch(setError(err.response.data))
    }
  }
}


const getUserData = (payload) => {
  return async (dispatch) => {
    try {
      const user = await Axios({
        method: "GET",
        headers: {
          access_token: payload.access_token
        },
        url: baseUrl + `/user/${payload.userId}`
      })
  
      dispatch(setUser(user.data))
    } catch (err) {
      dispatch(setError(err.response.data))
    }
  }
}

const getUserIdCardImages = (payload) => {
  return async (dispatch) => {
    try {
      const res = await Axios({
        method: "GET",
        headers: {
          access_token: payload.access_token
        },
        url: baseUrl + `/userIdCard/${payload.imageName}`,
        responseType: "blob"
      })
      console.log(res)
      dispatch(userIdCardImages(URL.createObjectURL(res.data)))
    } catch (err) {
      dispatch(setError(err.response.data))
    }
  }
}

const getUserPhotosImages = (payload) => {
  return async (dispatch) => {
    try {
      const res = await Axios({
        method: "GET",
        headers: {
          access_token: payload.access_token
        },
        url: baseUrl + `/userPhotos/${payload.imageName}`,
        responseType: "blob"
      })
    
      dispatch(userPhotosImages(URL.createObjectURL(res.data)))
    } catch (err) {
      dispatch(setError(err.response.data))
    }
  }
}


export default {
  setError,
  setUsers,
  setMessage,
  getUsers,
  verifyUser,
  getUserData,
  getUserIdCardImages,
  getUserPhotosImages
}