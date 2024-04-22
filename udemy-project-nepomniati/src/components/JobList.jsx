import data from "../mock/data.json";
import { JobPosition } from "./JobPosition";
import { useSelector } from "react-redux";
import { selectVisiblePositions } from "../store/positions/positions-selectors";
import { selectFilters } from "../store/filters/filters-reducer";

const JobList = () => {
  const filters = useSelector(selectFilters);
  const data = useSelector((state) => selectVisiblePositions(state, filters));

  return (
    <div className="job-list">
      {data.map((item) => (
        <JobPosition key={item.id} {...item} />
      ))}
    </div>
  );
};

export { JobList };
