import { z } from "zod";
import { FormType } from "../../models/Form";
import { useTasksStore } from "../../providers/Tasks-provider";

export const useFormFacade = () => {
  const { tasksStore } = useTasksStore();
  const formSchema: Record<FormType, any> = {
    Category: z.object({
      id: z.string().optional(),
      title: z.string().min(5, "Title is required, min 5 characters 😥"),
    }),
    Task: z.object({
      id: z.string().optional(),
      title: z.string().min(5, "Title is required, min 5 characters 😥"),
      description: z.string(),
      deadline: z.string(),
      Tasks_CategoryId: z.string().min(1, "Task Category is required"),
    }),
  };

  const getDefaultValue = (type: FormType) => {
    return type === "Task"
      ? {
          id: "",
          title: "",
          description: "",
          deadline: new Date().toISOString().slice(0, 16),
          Tasks_CategoryId: tasksStore.selectedCategory?.toString(),
        }
      : {
          id: "",
          title: "",
        };
  };

  return { formSchema, getDefaultValue };
};
