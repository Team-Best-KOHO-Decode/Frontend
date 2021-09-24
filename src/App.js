import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
          <Link to="/dashboard">Dashboard | </Link>
          <Link to="/group/invite">Invite | </Link>
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
