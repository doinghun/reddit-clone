import React from 'react';
import { List, Item } from './styledComponents';

const mockPost = [
  {
    title: 'post1',
    url: '/1',
    author: 'deepfkingvalue',
    text: 'test',
  },
  {
    title: 'post2',
    url: '/2',
    author: 'dohun',
    text: 'test',
  },
  {
    title: 'post3',
    url: '/3',
    author: 'kim',
    text: 'test',
  },
];
const PostList = () => (
  <List>
    {mockPost.map((post, index) => (
      <Item key={index}>
        <div>{post.title}</div>
      </Item>
    ))}
  </List>
);

export default PostList;
