import React from 'react';
import PostList from 'components/PostList';
import { Container, HomeMainSection } from './styledComponents';

const Home = () => (
  <Container>
    <HomeMainSection>
      <PostList />
    </HomeMainSection>
  </Container>
);

export default Home;
