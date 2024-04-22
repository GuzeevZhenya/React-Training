import { Badge } from "../UI/Badge";
import { Card } from "../UI/Card";
import { Stack } from "../UI/Stack";
import { useSelector, useDispatch } from "react-redux";
import { removeFilter, clearFilter } from "../store/filters/filters-reducer";

const FilterPanel = () => {
  const filtersSelectore = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  if (filtersSelectore.length === 0) {
    return null;
  }

  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {filtersSelectore.map((el) => {
            return (
              <Badge
                key={el}
                onClick={() => dispatch(removeFilter(el))}
                variant="clearable"
              >
                {el}
              </Badge>
            );
          })}
        </Stack>

        <button onClick={() => dispatch(clearFilter)} className="link">
          Clear
        </button>
      </div>
    </Card>
  );
};

export { FilterPanel };
