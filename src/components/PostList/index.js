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
    id: 1,
    created: Date.now(),
    number_of_comments: 100,
  },
  {
    title: 'post2',
    url: '/2',
    author: 'dohun',
    text: 'test',
    score: 2,
    id: 2,
    created: Date.now(),
    number_of_comments: 40,
  },
  {
    title: 'post3',
    url: '/3',
    author: 'kim',
    text: 'test',
    score: 3,
    id: 3,
    created: Date.now(),
    number_of_comments: 30,
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
