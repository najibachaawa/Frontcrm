import React from 'react';
import {Container, Avatar, Content, Snippet, Title} from './Styles';

export default function ConversationListItem(props) {
    const { photo, name, text } = props.data;

    return (
      <Container>
        <Avatar src={photo} alt="conversation" />
        <Content>
          <Title>{ name }</Title>
          <Snippet>{ text }</Snippet>
        </Content>
      </Container>
    );
}