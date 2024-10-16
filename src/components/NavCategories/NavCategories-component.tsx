import { FC, useEffect } from "react";
import { getAllData } from "../../hooks/DataService-hook";
import { useTasksStore } from "../../providers/Tasks-provider";
import { Button, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Li, Nav, Ul } from "./NavCategories";
import { useTasksFacade } from "../../pages/Tasks/Tasks-facade-service";
import { Tasks_Category } from "../../models/Task";

interface Props {
  deleteCategory: (id: number) => void;
}

const NavCategories: FC<Props> = ({ deleteCategory }) => {
  const { tasksStore, setCategories } = useTasksStore();
  const { fetchTasks } = useTasksFacade();

  useEffect(() => {
    getAllData<Tasks_Category[]>("Tasks_Category").then((res) => {
      setCategories(res.data);
      fetchTasks(res.data[0].id);
    });
  }, []);

  return (
    <Nav key={tasksStore.selectedCategory}>
      <Ul>
        {tasksStore.categories &&
          tasksStore.categories.map((o) => (
            <>
              <Li
                $selectedCategory={tasksStore.selectedCategory === o.id}
                key={o.id}
              >
                <IconButton onClick={() => deleteCategory(o.id)}>
                  <DeleteIcon />
                </IconButton>
                <Button
                  sx={{ width: "max-content" }}
                  onClick={() => fetchTasks(o.id)}
                >
                  {o.title}
                </Button>
              </Li>
            </>
          ))}
      </Ul>
    </Nav>
  );
};

export default NavCategories;
