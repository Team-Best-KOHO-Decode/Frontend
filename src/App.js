import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Activity from "./Activity";
import TopVotePage from "./TopVote";

const App = () => {
  return (
    <div className="App">
      <Router>
        <ul>
          <Link to="/activity">Activity</Link>
        </ul>
        <ul>
          <Link to="/topvote">Top Vote</Link>
        </ul>
        <Switch>
          <Route path="/activity">
            <Activity />
          </Route>
          <Route path="/topvote">
            <TopVotePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
