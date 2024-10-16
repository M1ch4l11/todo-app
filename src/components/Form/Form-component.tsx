import { useForm } from "react-hook-form";
import {
  TextField,
  Button,
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import { useEffect } from "react";
import { useTasksStore } from "../../providers/Tasks-provider";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProps } from "../../models/Form";
import { Textarea } from "@mui/joy";
import { useFormFacade } from "./Form-facade-service";

const FormComponent: React.FC<FormProps> = ({
  type,
  submit,
  data,
  eventType,
}) => {
  const { getDefaultValue, formSchema } = useFormFacade();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: getDefaultValue(type),
    resolver: zodResolver(formSchema[type]),
  });

  useEffect(() => {
    if (data && type === "Task") {
      reset({
        id: data.id.toString(),
        title: data?.title ?? "",
        description: data?.description ?? "",
        deadline: data?.deadline.toString() ?? "",
        Tasks_CategoryId: data?.Tasks_CategoryId.toString() ?? "",
      });
    }
  }, [data, reset]);

  const { tasksStore } = useTasksStore();

  const handleFormSubmit = (data: any) => {
    submit(data, eventType);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(handleFormSubmit)}
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: 400,
        margin: "0 auto",
        padding: "20px",
        gap: 2,
      }}
    >
      <Typography variant="h5" align="center" gutterBottom>
        {type}
      </Typography>

      {type === "Category" ? (
        <TextField
          label="Title"
          variant="outlined"
          {...register("title", { required: "Name is required" })}
          error={!!errors.title}
        />
      ) : (
        <>
          <TextField
            label="Title"
            variant="outlined"
            {...register("title", { required: "Title is required" })}
            error={!!errors.title}
            helperText={errors.title ? errors.title.message : ""}
          />
          <Textarea
            aria-label="minimum height"
            minRows={3}
            maxRows={4}
            sx={{ resize: "none", overflow: "hidden" }}
            placeholder="Description..."
            {...register("description", {
              required: "Description is required",
            })}
          />
          <TextField
            label=""
            type="datetime-local"
            variant="outlined"
            {...register("deadline", { required: "Deadline is required" })}
            error={!!errors.deadline}
            helperText={errors.deadline ? errors.deadline.message : ""}
          />
          <FormControl
            variant="outlined"
            fullWidth
            error={!!errors.Tasks_CategoryId}
          >
            <InputLabel id="category-select-label">Select Category</InputLabel>
            <Select
              label="Select Category"
              labelId="category-select-label"
              value={watch("Tasks_CategoryId")}
              {...register("Tasks_CategoryId", {
                required: "Category ID is required",
              })}
            >
              {tasksStore.categories.map((category) => (
                <MenuItem key={category.id} value={category.id}>
                  {category.title}
                </MenuItem>
              ))}
            </Select>

            {errors.Tasks_CategoryId && (
              <FormHelperText>{errors.Tasks_CategoryId.message}</FormHelperText>
            )}
          </FormControl>
        </>
      )}

      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </Box>
  );
};

export default FormComponent;
