import React from 'react';
import { Button } from 'react-bootstrap';
import { List, Item, Content, Title, Description } from './styles';

const PostsList = (props) => {
  const { posts } = props;
  return (
    <List>
      {
        posts &&
        posts.map( post => (
          <Item key={post.id}>
            <Content>
              <Title>{post.title}</Title>
              <Description>{post.body}</Description>
              <Button variant="dark">Ver más</Button>
            </Content>
          </Item>
        ))
      }
    </List>
  );
}

export default PostsList;