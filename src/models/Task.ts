export interface Tasks_Category {
  id: number;
  title: string;
}

export interface Task {
  id: number;
  Tasks_CategoryId: number;
  title: string;
  description: string;
  deadline: number;
  status: "active" | "completed";
}

export interface TasksStore {
  categories: Tasks_Category[];
  tasks: Task[];
  status: string;
  searchItem?: Task;
  selectedCategory?: number;
}
