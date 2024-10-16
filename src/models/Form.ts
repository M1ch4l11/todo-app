import { Task } from "./Task";

export type FormType = "Category" | "Task";

export interface FormProps {
  type: FormType;
  eventType: string;
  data?: Task;
  submit: (data: any, eventType: string) => void;
}
