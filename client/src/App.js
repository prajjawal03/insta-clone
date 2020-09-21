import React from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Posts from "./pages/Posts";
import Mypage from "./pages/Mypage";
import { Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/posts" component={Posts} />
      <Route path="/mypage" component={Mypage} />
    </div>
  );
}

export default App;
