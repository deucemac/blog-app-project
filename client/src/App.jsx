import React from 'react'
import './App.css'
import Home from './components/Home'
import Posts from './components/Posts'
import PostCreate from './components/PostCreate'
import PostEdit from './components/PostEdit'
import PostDetail from './components/PostDetail'
import { Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/posts" component={Posts} />
        <Route path="/add-posts" component={PostCreate} />
        <Route exact path="/posts/:id/edit" component={PostEdit} />
        <Route exact path="/posts/:id" component={PostDetail} />
      </Switch>
    </div>
  )
}

export default App