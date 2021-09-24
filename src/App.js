import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import "./App.css";
import Activity from "./Activity";
import TopVotePage from "./TopVote";
import Setup from "./Setup";
import GroupPlanSummaryPage from "./GroupPlanSummary";

const App = () => {
  return (
    <div className="App">
      <Router>
        <ul>
          <Link to="/dashboard">Dashboard | </Link>
          <Link to="/group/invite">Invite | </Link>
          <Link to="/activity">Activity | </Link>
          <Link to="/topvote">Top Vote | </Link>
          <Link to="/plans">Plans|</Link>
          <Link to="/setup">Setup</Link>
        </ul>
        <div className="header">
          <Logo />
        </div>
        <Switch>
          <Route path="/setup">
            <Setup />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/activity">
            <Activity />
          </Route>
          <Route path="/topvote">
            <TopVotePage />
          </Route>
          <Route path="/plans">
            <GroupPlanSummaryPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
