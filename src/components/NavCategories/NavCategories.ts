import styled from "styled-components";

export const Nav = styled.nav`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: fit-content;
  max-width: 100%;
`;

export const Ul = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  overflow: auto;
  padding-bottom: 20px;
`;

export const Li = styled.li<{ $selectedCategory: boolean }>`
  display: flex;
  align-items: center;
  padding: 10px 0;
  border: 1px solid #ddd;
  background-color: ${({ $selectedCategory }) =>
    $selectedCategory ? "#ddd" : ""};
`;
