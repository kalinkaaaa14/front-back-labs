import React, {useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Redirect from "react-router-dom/es/Redirect";
import Posts from "./components/Posts";
import AddPost from "./components/AddPost";
import NotFound from './components/NotFound';

function App() {
    const [addNewPost, setAddNewPost] = useState(false);

    const onAddPostHandler = () =>{
        setAddNewPost((prevState)=> !prevState);
    }
  return (
      <Router>
        <div className="App">
          <Switch>
              <Route
                  exact path='/posts'
                  render={(props) => (
                      <Posts {...props} addNewPost />
                  )}
              />
              <Route
                  exact path='/add'
                  render={(props) => (
                      <AddPost {...props} onAddPost={onAddPostHandler} />
                  )}
              />

            <Redirect exact from="/" to="/posts" />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
  );
}


export default App;
