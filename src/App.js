import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { CreatePage, InvitePage } from "./Group/Pages";

import Dashboard from "./Dashboard";
import "./App.css";
import Activity from "./Activity";
import TopVotePage from "./TopVote";
import CreatePlan from "./CreatePlan";
import ChooseBudget from "./ChooseBudget";
import ChooseTime from "./ChooseTime";
import GroupPlanSummaryPage from "./GroupPlanSummary";
import { ReactComponent as Logo } from "./assets/icons/logo.svg";

const App = () => {
  return (
    <div className="App">
      <Router>
        <ul>
          <Link to="/group/create">Create | </Link>
          <Link to="/activity">Activity | </Link>
          <Link to="/topvote">Top Vote | </Link>
          <Link to="/plans">Plans | </Link>
          <Link to="/createplan">Create Plan | </Link>
          <Link to="/choosebudget">Choose Budget | </Link>
          <Link to="/choosetime">Choose Time</Link>
        </ul>
        <div className="header">
          <Logo />
        </div>
        <Switch>
          <Route path="/createplan">
            <CreatePlan />
          </Route>
          <Route path="/choosebudget">
            <ChooseBudget />
          </Route>
          <Route path="/choosetime">
            <ChooseTime />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/group/create">
            <CreatePage />
          </Route>
          <Route path="/group/invite">
            <InvitePage />
          </Route>
          <Route path="/group/:id">
            <GroupPlanSummaryPage />
          </Route>
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
