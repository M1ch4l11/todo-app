import { z } from "zod";
import { Task } from "./Task";

export interface FormProps {
  type: string;
  eventType: string;
  data?: Task;
  submit: (data: any, eventType: string) => void;
}

export const formSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(5, "Title is required"),
  description: z.string(),
  deadline: z.string(),
  Tasks_CategoryId: z.string().min(1, "Task Category is required"),
});
