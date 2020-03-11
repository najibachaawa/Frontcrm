import React from 'react';
import {Container, Input} from './Styles';

export default function ConversationSearch() {
    return (
      <Container>
        <Input
          type="search"
          placeholder="chercher dans la conversation"
        />
      </Container>
    );
}