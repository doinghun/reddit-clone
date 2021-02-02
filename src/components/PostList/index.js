import React from 'react';
import Post from 'components/Post';
import { List, Item } from './styledComponents';

const mockPost = [
  {
    title: 'post1',
    url: '/1',
    author: 'deepfkingvalue',
    text: 'test',
    score: 1,
  },
  {
    title: 'post2',
    url: '/2',
    author: 'dohun',
    text: 'test',
    score: 2,
  },
  {
    title: 'post3',
    url: '/3',
    author: 'kim',
    text: 'test',
    score: 3,
  },
];
const PostList = () => (
  <List>
    {mockPost.map((post, index) => (
      <Item key={index}>
        <Post {...post} />
      </Item>
    ))}
  </List>
);

export default PostList;
