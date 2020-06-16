import React from "react";
import "./App.css";
import Home from "./components/Home";
import Posts from "./components/Posts";
import PostCreate from "./components/PostCreate";
import PostEdit from "./components/PostEdit";
import PostDetail from "./components/PostDetail";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Home} />{" "}
        {/*Route path for Home, should match the name and function of Home.jsx */}
        <Route exact path="/posts" component={Posts} />{" "}
        {/*Route path for Posts, should match the name and function of Posts.jsx */}
        <Route path="/add-posts" component={PostCreate} />{" "}
        {/*Route path for PostCreate, should match the name and function of PostCreate.jsx */}
        <Route exact path="/posts/:id/edit" component={PostEdit} />{" "}
        {/*Route path for PostEdit, should match the name and function of PostEdit.jsx */}
        <Route exact path="/posts/:id" component={PostDetail} />{" "}
        {/*Route path for PostDetail, should match the name and function of PostDetail.jsx */}
      </Switch>
    </div>
  );
};

export default App;
