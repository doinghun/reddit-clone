import React from 'react';
import PostList from 'components/PostList';
import { Container, HomeMainSection, SubRedditTitle } from './styledComponents';
import { subreddit_name } from 'util/constant';

const Home = () => (
  <Container>
    <HomeMainSection>
      <SubRedditTitle>/{subreddit_name}</SubRedditTitle>
      <PostList />
    </HomeMainSection>
  </Container>
);

export default Home;
