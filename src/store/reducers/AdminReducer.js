const initState = {
  users: [],
  user: {},
  message: "",
  error: null,
  userIdCardImages: "",
  userPhotosImages: ""
}

export default function reducer(state = initState, action) {
  const { type, payload } = action
  switch(type) {
    case "SET_USERS":
      return {
        ...state,
        users: payload
      }
    case "SET_MESSAGE":
      return {
        ...state,
        message: payload
      }
    case "SET_ERROR":
      return {
        ...state,
        error: payload
      }
    case "SET_USER":
      return {
        ...state,
        user: payload
      }
    case "SET_userIdCardImages":
      return {
        ...state,
        userIdCardImages: payload
      }
    case "SET_userPhotosImages":
      return {
        ...state,
        userPhotosImages: payload
      }

    default: 
      return state
  }
}