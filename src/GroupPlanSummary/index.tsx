import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { groupSlice } from "../Group/store/slice";
import { useParams } from "react-router-dom";
import Button from "../Components/Button";
import ActivitySummary from "../Components/ActivitySummary";
import { selectGroupName, selectGroupLoading } from "../Group/store/selectors";
import "./styles.css";
import { Link } from "react-router-dom";

function GroupPlanSummaryPage() {
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();
  const groupLoading = useSelector(selectGroupLoading);
  const groupName = useSelector(selectGroupName);

  useEffect(() => {
    dispatch(groupSlice.actions.requestGetGroup());
    axios
      .get(`https://bohobackend.herokuapp.com/api/group/${id}`)
      .then((response) => {
        dispatch(
          groupSlice.actions.responseGetGroup({
            group_id: response.data.group_id,
            group_url: response.data.group_join_code,
            group_name: response.data.group_name,
            group_events: response.data.group_events,
          })
        );
      })
      .catch(() => {
        dispatch(groupSlice.actions.errorGetGroup());
      });
  }, [dispatch, id]);

  if (groupLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="root">
      <p className="title">{`${groupName}'s Plan`}</p>
      <ActivitySummary
        budget="$$"
        time="8:30PM EST"
        location="Toronto-East"
        activity="Sushi"
      />
      <div className="group-summary-buttons">
        <Button text="Edit Plan" color="secondary" />
        <Link to="/createplan" className="nostyle">
          <Button text="Create New Plan" color="primary" />
        </Link>
      </div>
    </div>
  );
}

export default GroupPlanSummaryPage;
