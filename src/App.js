import React, { Component } from "react";
import Main from "./StoreMain.jsx";
import Page from "./StoreItemPage.jsx";
import "./Style.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="navbar">
          <Link to="/" className="router-link">
            <h3>Home</h3>
          </Link>
          <Link to="/" className="your-logo">
            <h2>Your Shop</h2>
          </Link>
          <div className="your-details">
            <h3>Your balance:</h3>
            <h3 className="gold">$100</h3>
          </div>
        </div>

        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/StoreItemPage/:id" component={Page} />
          <Route render={() => <h1>Not Found</h1>} />
        </Switch>
      </Router>
    );
  }
}

export default App;
