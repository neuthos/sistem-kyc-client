const initState = {
  user: {},
  error: null,
  adminLogin: localStorage.access_token && localStorage.isAdmin === "true" ? true : false,
  userLogin: localStorage.access_token ? true : false,
  registered: false, 
}

export default function reducer(state = initState, action) {
  const { type, payload } = action
  switch(type) {
    case "SET_LOGIN":
      return {
        ...state,
        adminLogin: payload.admin,
        userLogin: payload.user
      }
    case "SET_REGISTER":
      return {
        ...state,
        registered: payload
      }
    case "SET_ERROR":
      return {
        ...state,
        error: payload
      }
    case "SET_LOGOUT":
      localStorage.removeItem("access_token")
      localStorage.removeItem("isAdmin")
      return {
        adminLogin: false,
        userLogin: false
      }
    default: 
      return state
  }
}