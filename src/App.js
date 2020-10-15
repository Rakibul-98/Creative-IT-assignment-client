import React, { createContext, useState } from 'react';
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';
import PlaceOrder from './Components/Main/Orders/PlaceOrder/PlaceOrder';
import Orders from './Components/Main/Orders/Order/Orders';
import Review from './Components/Main/Review/Review';
import Service from './Components/Main/Service/Service/Service';
import AddServices from './Components/Main/Service/AddServices/AddServices';
import NoMatch from './Components/Main/NoMatch/NoMatch';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import AddAdmin from './Components/Main/Service/AddAdmin/AddAdmin';



export const UserContext = createContext();


function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
      <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <PrivateRoute path="/placeOrder">
          <PlaceOrder></PlaceOrder>
        </PrivateRoute>
        <PrivateRoute path="/orders">
          <Orders></Orders>
        </PrivateRoute>
        <PrivateRoute path="/review">
          <Review></Review>
        </PrivateRoute>
        <PrivateRoute path="/service">
          <Service></Service>
        </PrivateRoute>
        <PrivateRoute path="/addServices">
          <AddServices></AddServices>
        </PrivateRoute>
        <PrivateRoute path="/addAdmin">
          <AddAdmin></AddAdmin>
        </PrivateRoute>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="*">
          <NoMatch/>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
