import { Box, IconButton } from "@mui/material";
import styled from "styled-components";

export const NavigationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ActionContainer = styled.div`
  display: inherit;
  align-items: end;
`;

export const TaskRow = styled.li`
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
`;

export const ModalWrapper = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: white;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.1);
  padding: 16px;
  border-radius: 0.5em;
`;

export const Container = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin: 10px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.02);
  }
`;

export const Title = styled.h2`
  font-size: 1.5em;
  color: #333;
  margin-bottom: 10px;
`;

export const Paragraph = styled.p`
  font-size: 1em;
  color: #555;
  margin: 5px 0;

  strong {
    color: #222;
  }
`;

export const StyledIconButton = styled(IconButton)`
  &:hover {
    color: #007bff;
  }
`;
