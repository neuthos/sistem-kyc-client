import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"

import AdminReducer from "./AdminReducer"
import AuthReducer from "./AuthReducer"
import UserReducer from "./UserReducer"

const RootReducer = combineReducers({
  Admin: AdminReducer,
  Auth: AuthReducer,
  User: UserReducer
})

const store = createStore(RootReducer, applyMiddleware(thunk))

export default store