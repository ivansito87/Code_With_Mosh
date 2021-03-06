import React from "react";
import ReactDOM from "react-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import PanelPage from "./components/wrapper";
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Customers from "./components/common/customers";
import Rentals from "./components/common/rentals";
import NotFound from "./components/common/notFound";
// import MovieForm from "./components/common/movieForm";
import MovieAdd from "./components/common/movieAdd";
import LoginForm from "./components/LoginForm/loginForm";
import Register from "./components/register/register";

ReactDOM.render(
  <BrowserRouter >
    <Switch>
      <Route path="/register" component={Register}></Route>
      <Route path="/login" component={LoginForm}></Route>
      <Route path="/movies/:id" component={MovieAdd}></Route>
      <Route path="/movies" component={() => <PanelPage />}></Route>
      <Route path="/customers" component={Customers}></Route>
      <Route path="/rentals" component={Rentals}></Route>
      <Route path="/not-found" component={NotFound}></Route>
      <Redirect from="/" exact to="/movies" />
      <Redirect to="/not-found" />
    </Switch>
  </BrowserRouter>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

