const initState = {
  message: "",
  error: null,
  user: {}
}

export default function reducer(state = initState, action) {
  const { type, payload } = action
  switch(type) {
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

    default: 
      return state
  }
}