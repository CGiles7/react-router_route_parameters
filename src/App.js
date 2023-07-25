import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import UserProfile from "./UserProfile";

function App() {
  return (
    <div className="App">
      <Switch>
        {/* Route for displaying the "New User" link */}
        <Route path="/user/new">
          <div>Unable to create a new user</div>
        </Route>

        {/* Route for displaying the UserProfile for the specified ID */}
        <Route path="/user/:userId">
          <UserProfile />
        </Route>

        {/* Route for displaying the list of users */}
        <Route exact path="/">
          <Link to="/user/new">New User</Link>
          {Array(10)
            .fill()
            .map((ignoredValue, index) => index + 1)
            .map((id) => (
              <div key={id}>
                <Link to={`/user/${id}`} data-testid={`user-${id}`}>
                  User{id}
                </Link>
              </div>
            ))}
        </Route>

        {/* 404 Route - Any other route displays "404 Not Found" */}
        <Route>
          <h1>404 Not Found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
