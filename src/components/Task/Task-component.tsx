import { FC } from "react";
import { Container } from "@mui/material";
import {
  DescriptionContainer,
  DescriptionText,
  DescriptionTitle,
  Paragraph,
  StyledIconButton,
  Title,
} from "./Task";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AddIcon from "@mui/icons-material/Add";
import { Task } from "../../models/Task";
import { useTasksFacade } from "../../pages/Tasks/Tasks-facade-service";

interface Props {
  item: Task;
}

const TaskComponent: FC<Props> = ({ item }) => {
  const { updateTask } = useTasksFacade();

  return (
    <Container>
      <Title>{item.title}</Title>
      <DescriptionContainer>
        <DescriptionTitle>Description</DescriptionTitle>
        <DescriptionText
          maxRows={3}
          size="lg"
          value={item.description}
          readOnly
        />
      </DescriptionContainer>
      <Paragraph>
        <strong>Deadline:</strong>
        {new Date(item.deadline).toLocaleDateString()}
      </Paragraph>
      <Paragraph>
        <strong>Status:</strong> {item.status}
        <StyledIconButton onClick={() => updateTask(item, true)}>
          {item.status === "active" ? <CheckCircleIcon /> : <AddIcon />}
        </StyledIconButton>
      </Paragraph>
    </Container>
  );
};

export default TaskComponent;
