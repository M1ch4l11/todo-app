import { z } from "zod";
import { FormType } from "../../models/Form";

export const useFormFacade = () => {
  const formSchema: Record<FormType, any> = {
    Category: z.object({
      title: z.string().min(5, "Title is required"),
    }),
    Task: z.object({
      id: z.string().optional(),
      title: z.string().min(5, "Title is required"),
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
          deadline: "",
          Tasks_CategoryId: "",
        }
      : {
          title: "",
        };
  };

  return { formSchema, getDefaultValue };
};
