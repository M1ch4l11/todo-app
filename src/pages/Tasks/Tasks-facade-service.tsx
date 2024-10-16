import {
  createData,
  deleteData,
  getAllData,
  updateData,
} from "../../hooks/DataService-hook";
import { enqueueSnackbar } from "notistack";
import { useTasksStore } from "../../providers/Tasks-provider";
import { Task, Tasks_Category } from "../../models/Task";
import { useCallback } from "react";

export const useTasksFacade = () => {
  const {
    tasksStore,
    deleteTask,
    setTask,
    updateCategories,
    removeCategories,
    addNewTask,
    setTasks,
    setSelectedCategory,
  } = useTasksStore();

  const deleteTaskItem = useCallback(
    (taskId: number) => {
      deleteData(
        `/Tasks_Category/${tasksStore.selectedCategory}/Task/${taskId}`
      )
        .then((res) => {
          deleteTask(res.data.id);
          enqueueSnackbar(`Task has been deleted ✅`, {
            variant: "success",
          });
        })
        .catch((err) => {
          enqueueSnackbar(`${err} 😥`, {
            variant: "error",
          });
        });
    },
    [tasksStore.selectedCategory]
  );

  const updateTask = useCallback((item: Task, status: boolean) => {
    const updatedItem = status
      ? { ...item, status: item.status === "active" ? "completed" : "active" }
      : item;

    updateData<Task>(
      `/Tasks_Category/${item.Tasks_CategoryId}/Task/${item.id}`,
      updatedItem
    )
      .then((res) => {
        setTask(res.data);
        enqueueSnackbar(`Task has been updated ✅`, {
          variant: "success",
        });
      })
      .catch((err) => {
        enqueueSnackbar(`${err} 😥`, {
          variant: "error",
        });
      });
  }, []);

  const addNewCategory = useCallback((categoryTitle: string) => {
    createData<Tasks_Category>("/Tasks_Category", {
      title: categoryTitle,
    })
      .then((res) => {
        updateCategories(res.data);
        enqueueSnackbar(`New list successfully added ✅`, {
          variant: "success",
        });
      })
      .catch((err) => {
        enqueueSnackbar(`${err} 😥`, {
          variant: "error",
        });
      });
  }, []);

  const deleteCategory = useCallback((id: number) => {
    deleteData(`/Tasks_Category/${id}`)
      .then((res) => {
        removeCategories(res.data.id);
        enqueueSnackbar(`Deleted list ✅`, {
          variant: "success",
        });
      })
      .catch((err) => {
        enqueueSnackbar(`${err} 😥`, {
          variant: "error",
        });
      });
  }, []);

  const createNewTask = useCallback((task: Task) => {
    createData<Task>(`/Tasks_Category/${task.Tasks_CategoryId}/Task`, task)
      .then((res) => {
        if (tasksStore.selectedCategory === task.Tasks_CategoryId)
          addNewTask(res.data);
        else fetchTasks(task.Tasks_CategoryId);
        enqueueSnackbar(`Task has been created ✅`, {
          variant: "success",
        });
      })
      .catch((err) => {
        enqueueSnackbar(`${err} 😥`, {
          variant: "error",
        });
      });
  }, []);

  const fetchTasks = useCallback((id: number): void => {
    getAllData<Task[]>(`Tasks_Category/${id}/Task`)
      .then((res) => {
        setTasks(res.data);
        setSelectedCategory(id);
      })
      .catch((err) => {
        if (err.status === 404) {
          enqueueSnackbar("Please create some task for this section 😥", {
            variant: "error",
          });
        }
      });
  }, []);

  return {
    deleteTaskItem,
    updateTask,
    addNewCategory,
    deleteCategory,
    createNewTask,
    fetchTasks,
  };
};
