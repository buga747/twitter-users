import { Description, DiscoverLink, HomeContainer, Title } from './Home.styled';

const Home = () => {
  return (
    <HomeContainer>
      <Title>Welcome to our Twitter Users site!</Title>
      <DiscoverLink to="/tweets">Discover</DiscoverLink>
      <Description>twitter users you may know!</Description>
    </HomeContainer>
  );
};

export default Home;
