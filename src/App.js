import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';
import { Switch, Redirect, Route } from 'react-router-dom';
import Auth from "./Auth"
import Action from "./store/actions"

// Pages
import Login from "./Pages/Auth/Login/LoginPage"
import Register from "./Pages/Auth/Register/RegisterPage"
import UserHomePage from "./Pages/Home/UserHomepage"
import AdminHomepage from "./Pages/Home/AdminHomePage"
import UserVerificationPage from "./Pages/Validation/UserVerificationPage"
import VerificationPage from "./Pages/Validation/VerificationPage"

// 
function App() {
  const Admin = useSelector(state => state.Auth.adminLogin)
  const User = useSelector(state => state.Auth.userLogin)
  const dispatch = useDispatch()

  return (
    <Switch>
      <Route
        path="/login"
        exact
        render={() => (Admin ? <Redirect to="/dashboard"/> : User ? <Redirect to="/"/> : <Login/>)}
      />

      <Route
        path="/register"
        exact
        render={() => (Admin ? <Redirect to="/dashboard"/> : User ? <Redirect to="/"/> : <Register/>)}
      />
      
      <Route
        path="/verification/:userId"
        render={() => (Admin ? <VerificationPage/> : User ?   <Redirect to="/"/> : <Redirect to="/login"/>)}
      /> 

      <Route
        path="/dashboard"
        exact
        render={() => (Admin ? <AdminHomepage/> : User ?  <Redirect to="/"/> : <Redirect to="/login"/>)}
      /> 

      <Route
        path="/verify"
        exact
        render={() => (Admin ? <Redirect to="/dashboard"/> : User ?  <UserVerificationPage/>  : <Redirect to="/login"/>)}
      /> 

      <Route
        path="/"
        exact
        render={() => (Admin ? <Redirect to="/dashboard"/> : User ? <UserHomePage/> : <Redirect to="/login"/>)}
      /> 

    </Switch>
  );
}

export default App;
