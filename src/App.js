import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ListBookmark from './containers/ListBookmark';
import AddBookmark from './containers/AddBookmark'
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={AddBookmark} />
          <Route path="/bookmark" component={ListBookmark} />
        </div>
      </Router>
    );
  }
}

export default App;
