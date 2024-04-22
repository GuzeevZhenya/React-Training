import { FilterPanel } from "./components/FilterPanel";
import { JobList } from "./components/JobList";
import { TheHeader } from "./components/TheHeader.jsx";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { addPositions } from "./store/positions/positions-reducer.js";
import data from "./mock/data.json";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addPositions(data));
  }, []);
  return (
    <>
      <TheHeader />
      <div className="container">
        <FilterPanel />
        <JobList />
      </div>
    </>
  );
}

export default App;
