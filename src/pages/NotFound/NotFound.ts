import { Link } from "react-router-dom";
import styled from "styled-components";

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f8f8;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 8rem;
  margin: 0;
  color: #ff6b6b;
`;

export const Subtitle = styled.h2`
  font-size: 2rem;
  color: #333;
`;

export const StyledLink = styled(Link)`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #ff6b6b;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1.2rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff3d3d;
  }
`;
