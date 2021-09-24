import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { CreatePage, InvitePage } from "./Group/Pages";

import "./App.css";

import Activity from "./Activity";
import TopVotePage from "./TopVote";
import GroupPlanSummaryPage from "./GroupPlanSummary";

const App = () => {
  return (
    <div className="App">
      <Router>
        <ul>
          <Link to="/group/create">Create | </Link>
          <Link to="/activity">Activity | </Link>
          <Link to="/topvote">Top Vote</Link>
        </ul>
        <ul>
          <Link to="/plans">Plans</Link>
        </ul>
        <Switch>
          <Route path="/group/create">
            <CreatePage />
          </Route>
          <Route path="/group/invite">
            <InvitePage />
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
