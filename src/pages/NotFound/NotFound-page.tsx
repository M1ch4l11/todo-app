import { NotFoundContainer, StyledLink, Subtitle, Title } from "./NotFound";

const NotFoundPage = () => {
  return (
    <NotFoundContainer>
      <Title>404</Title>
      <Subtitle>Page Not Found</Subtitle>
      <StyledLink to="/">Go Back Home</StyledLink>
    </NotFoundContainer>
  );
};

export default NotFoundPage;
