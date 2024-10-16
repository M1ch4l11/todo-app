import { Textarea } from "@mui/joy";
import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 60%;
  margin: 20px auto;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 10px;
  color: #333;
  font-family: fantasy;
  color: #3333338c;
`;

export const DescriptionContainer = styled.section`
  margin-top: 20px;
  max-width: 100%;
  padding-bottom: 20px;
`;

export const DescriptionTitle = styled.h2`
  font-size: 1.5rem;
  color: #555;
  margin-bottom: 5px;
  font-family: sans-serif;
`;

export const DescriptionText = styled(Textarea)`
  font-size: 1rem;
  overflow: hidden;
  color: #666;
`;

export const Paragraph = styled.div`
  margin: 15px 0;
  font-size: 1rem;
  color: #444;
  font-family: sans-serif;

  strong {
    color: #000;
    margin-right: 4px;
  }
`;

export const StyledIconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-left: 10px;
  padding: 5px;
  display: inline-flex;
  align-items: center;
  color: #007bff;

  &:hover {
    color: #0056b3;
  }

  svg {
    font-size: 1.5rem;
  }
`;
