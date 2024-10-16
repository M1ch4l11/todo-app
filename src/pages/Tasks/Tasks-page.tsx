import { Backdrop, Button, Fade, IconButton, Modal } from "@mui/material";
import NavCategories from "../../components/NavCategories/NavCategories-component";
import { useTasksStore } from "../../providers/Tasks-provider";
import DeleteIcon from "@mui/icons-material/Delete";
import ChangeCircleRoundedIcon from "@mui/icons-material/ChangeCircleRounded";
import { useTasksFacade } from "./Tasks-facade-service";
import FilterComponent from "../../components/Filter/Filter-component";
import SearchBar from "../../components/SearchBar/SearchBar-component";
import { useState } from "react";
import FormComponent from "../../components/Form/Form-component";
import AddIcon from "@mui/icons-material/Add";

import {
  ActionContainer,
  FilterContainer,
  ModalWrapper,
  NavigationWrapper,
  StyledIconButton,
  TaskRow,
} from "./Tasks";
import { Task } from "../../models/Task";
import TaskComponent from "../../components/Task/Task-component";

const TaskPage = () => {
  const [formType, setFormVisible] = useState("");
  const [eventType, setEventType] = useState("");
  const [Task, setTask] = useState<Task | undefined>(undefined);

  const {
    deleteTaskItem,
    updateTask,
    addNewCategory,
    deleteCategory,
    createNewTask,
  } = useTasksFacade();
  const { tasksStore } = useTasksStore();

  function showForm(type: string, newEventType: string, Task?: Task): void {
    setFormVisible(type);
    setEventType(newEventType);
    setTask(Task ?? undefined);
  }

  function submitEvent(data: any, eventType: string): void {
    if (formType === "category") addNewCategory(data.title);
    else if (formType === "Task") {
      if (eventType === "create") createNewTask({ ...data, status: "active" });
      if (eventType === "update") updateTask(data, false);
    }
    setFormVisible("");
  }

  return (
    <>
      <NavigationWrapper>
        <NavCategories deleteCategory={(id) => deleteCategory(id)} />
        <Button onClick={() => showForm("category", "create")}>
          Add task List
        </Button>
      </NavigationWrapper>
      <FilterContainer>
        <FilterComponent />
        <SearchBar />
        <IconButton
          sx={{ height: "fit-content" }}
          onClick={() => showForm("Task", "create")}
        >
          <AddIcon />
        </IconButton>
      </FilterContainer>
      {tasksStore && (
        <div style={{ height: "68vh", overflowY: "scroll" }}>
          <ul>
            {tasksStore.tasks
              .filter(
                (o) => !tasksStore.status || tasksStore.status === o.status
              )
              .filter((o) =>
                !!tasksStore.searchItem ? o.id === tasksStore.searchItem.id : o
              )
              .map((item) => (
                <TaskRow key={item.id}>
                  <TaskComponent item={item} />
                  <ActionContainer>
                    <StyledIconButton
                      onClick={() => showForm("Task", "update", item)}
                    >
                      <ChangeCircleRoundedIcon />
                      update
                    </StyledIconButton>
                    <StyledIconButton
                      onClick={deleteTaskItem.bind({}, item.id)}
                    >
                      <DeleteIcon />
                      delete
                    </StyledIconButton>
                  </ActionContainer>
                </TaskRow>
              ))}
          </ul>
        </div>
      )}
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={!!formType}
        onClose={() => setFormVisible("")}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            TransitionComponent: Fade,
          },
        }}
      >
        <Fade in={!!formType}>
          <ModalWrapper>
            <FormComponent
              type={formType}
              data={Task}
              eventType={eventType}
              submit={(data, eventType) => submitEvent(data, eventType)}
            />
          </ModalWrapper>
        </Fade>
      </Modal>
    </>
  );
};

export default TaskPage;
