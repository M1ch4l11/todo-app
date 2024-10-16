import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { useTasksStore } from "../../providers/Tasks-provider";

const FilterComponent = () => {
  const { tasksStore, setSelectedStatus } = useTasksStore();

  return (
    <FormGroup sx={{ margin: "20px", display: "block" }}>
      <FormControlLabel
        control={
          <Checkbox
            checked={!tasksStore.status}
            onChange={setSelectedStatus}
            name="all"
            color="default"
          />
        }
        label="All"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={tasksStore.status === "active"}
            onChange={setSelectedStatus}
            name="active"
            color="secondary"
          />
        }
        label="Active"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={tasksStore.status === "completed"}
            onChange={setSelectedStatus}
            name="completed"
            color="success"
          />
        }
        label="Completed"
      />
    </FormGroup>
  );
};

export default FilterComponent;
