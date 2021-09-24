import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import { InvitePage } from "./Group/Pages";

import "./App.css";

import Activity from "./Activity";
import TopVotePage from "./TopVote";
const App = () => {
  return (
    <div className="App">
      <Router>
        <ul>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/group/invite">Invite</Link>
          <Link to="/activity">Activity</Link>
          <Link to="/topvote">Top Vote</Link>
        </ul>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/activity">
            <Activity />
          </Route>
          <Route path="/topvote">
            <TopVotePage />
          </Route>
          <Route path="/group/invite">
            <InvitePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
