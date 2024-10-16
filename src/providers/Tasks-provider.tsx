import { createContext, useContext, useState } from "react";
import { Task, Tasks_Category, TasksStore } from "../models/Task";

interface TasksContextType {
  tasksStore: TasksStore;
  setTasksStore: (tasksStore: TasksStore) => void;
  setSelectedCategory: (id: number) => void;
  setCategories: (tasksCategories: Tasks_Category[]) => void;
  setTasks: (task: Task[]) => void;
  deleteTask: (id: number) => void;
  setSelectedStatus: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setTask: (task: Task) => void;
  setSearchTask: (task?: Task) => void;
  updateCategories: (category: Tasks_Category) => void;
  removeCategories: (id: number) => void;
  addNewTask: (task: Task) => void;
}

const initialTasksStore: TasksStore = {
  categories: [],
  tasks: [],
  status: "",
  searchItem: undefined,
  selectedCategory: undefined,
};

const TasksContext = createContext<TasksContextType>({
  tasksStore: initialTasksStore,
  setTasksStore: (tasksStore: TasksStore) => {},
  setSelectedCategory: (id: number) => {},
  setCategories: (TasksCategories: Tasks_Category[]) => {},
  setTasks: (tasks: Task[]) => {},
  deleteTask: (id: number) => {},
  setSelectedStatus: (event: React.ChangeEvent<HTMLInputElement>) => {},
  setTask: (task: Task) => {},
  setSearchTask: (item?: Task) => {},
  updateCategories: (category: Tasks_Category) => {},
  removeCategories: (id: number) => {},
  addNewTask: (task: Task) => {},
});

export const TasksProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [tasksStore, setTasksStore] = useState<TasksStore>(initialTasksStore);

  const deleteTask = (id: number) => {
    setTasksStore((state) => ({
      ...state,
      tasks: state.tasks.filter((o) => o.id !== id),
    }));
  };

  const setTasks = (tasks: Task[]) => {
    setTasksStore((state) => ({
      ...state,
      tasks,
    }));
  };

  const setTask = (task: Task) => {
    setTasksStore((state) => ({
      ...state,
      tasks: state.tasks.map((o) => (o.id === task.id ? task : o)),
    }));
  };

  const addNewTask = (task: Task) => {
    setTasksStore((state) => ({
      ...state,
      tasks: [...state.tasks, task],
    }));
  };

  const setSelectedCategory = (id: number) => {
    setTasksStore((state) => ({
      ...state,
      selectedCategory: id,
    }));
  };

  const setCategories = (categories: Tasks_Category[]) => {
    setTasksStore((state) => ({
      ...state,
      categories,
    }));
  };

  const updateCategories = (category: Tasks_Category) => {
    setTasksStore((state) => ({
      ...state,
      categories: [...state.categories, category],
    }));
  };

  const removeCategories = (id: number) => {
    setTasksStore((state) => ({
      ...state,
      categories: state.categories.filter((o) => o.id !== id),
    }));
  };

  const setSelectedStatus = (event: React.ChangeEvent<HTMLInputElement>) => {
    const elementName = event.target.name;
    setTasksStore((state) => ({
      ...state,
      status: elementName === "all" ? "" : elementName,
    }));
  };

  const setSearchTask = (task?: Task) => {
    setTasksStore((state) => ({
      ...state,
      searchItem: task,
    }));
  };

  return (
    <TasksContext.Provider
      value={{
        tasksStore,
        setTasksStore,
        setTasks,
        setSelectedCategory,
        setCategories,
        deleteTask,
        setSelectedStatus,
        updateCategories,
        removeCategories,
        setTask,
        addNewTask,
        setSearchTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export const useTasksStore = () => {
  return useContext(TasksContext);
};
