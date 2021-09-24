import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from "./Dashboard";

const App = () => {
  return (
    <div className="App">
      <Router>
        <ul>
          <Link to="/dashboard">Dashboard</Link>
        </ul>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
