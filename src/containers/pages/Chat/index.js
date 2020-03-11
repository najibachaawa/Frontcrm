import React from 'react';
import {Container, Sidebar, Content} from './Styles';
import ConversationList from '../../components/ConversationList';
import MessageList from '../../components/MessageList';
import TeamOnline from '../../components/TeamOnline'
import HeaderUser from '../../../components/layout/HeaderUser';

const Chat = () => {
    return (
  <div>
  <HeaderUser></HeaderUser>
 
    <Container>
        <HeaderUser></HeaderUser>
        <Sidebar><ConversationList /></Sidebar>
        <Content> <MessageList /></Content>
        
        <Sidebar>
        <TeamOnline/></Sidebar>
      
    </Container>
    </div>
    );
}
export default Chat;