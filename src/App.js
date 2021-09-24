import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Activity from "./Activity";

const App = () => {
  return (
    <div className="App">
      <Router>
        <ul>
          <Link to="/activity">Activity</Link>
        </ul>
        <Switch>
          <Route path="/activity">
            <Activity />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
