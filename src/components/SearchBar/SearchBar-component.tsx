import { Autocomplete, TextField } from "@mui/material";
import { useTasksStore } from "../../providers/Tasks-provider";

const SearchBar = () => {
  const { tasksStore, setSearchTask } = useTasksStore();

  return (
    <div style={{ padding: "20px" }}>
      <Autocomplete
        options={tasksStore.tasks}
        getOptionLabel={(option) => option.title}
        style={{ width: 300, marginBottom: "20px" }}
        renderInput={(params) => (
          <TextField {...params} label="Search task" variant="outlined" />
        )}
        onChange={(event, newValue) => {
          setSearchTask(newValue ?? undefined);
        }}
      />
    </div>
  );
};

export default SearchBar;
